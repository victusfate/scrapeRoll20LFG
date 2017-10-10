const rp        = require('request-promise')
const cheerio   = require('cheerio')
const path      = require('path')
const execSync  = require('child_process').execSync

const NPages    = 10;
const aQueries  = []
for (let i = 2;i < process.argv.length;i++) {
  aQueries.push(('' + process.argv[i]).toLowerCase())
}
console.log('aQueries',aQueries)
const sRoot     = 'https://app.roll20.net'
const sBaseUrl  = `${sRoot}/forum/category/22`

const go = async () => {

  const getPostTitles = (html) => {
    const $     = cheerio.load(html)    
    let aData   = []
    $('.title').each( function(i,oTest) {
      const sHref = $(this).children().first().attr('href')
      const sText = $(this).children().first().text()
      const sLC   = sText.toLowerCase()
      const sData = $(this).html()
      if (!sData.includes('picto')) {
        let bMatch = false
        for (let i in aQueries) {
          let sQuery = aQueries[i]
          if (sLC.includes(sQuery)) {
            bMatch = true
            break
          }
        }
        if (bMatch) {
          aData.push({ relUrl: path.join(sRoot,sHref), sText: sText })
        }
      }
    })
    console.log({ aData: aData })
    return aData
  }

  const getData = async () => {
    let aPromises = []
    if (aQueries.length > 0) {
      for (let i = 0;i < NPages;i++) {
        let sUrl = sBaseUrl
        if (i > 0) {
          sUrl = `${sUrl}?p=${i}`
        }
        console.log('sUrl',sUrl)
        aPromises.push(rp(sUrl))
      }    
    }
    else {
      return Promise.reject(Error(`aQueries empty, pass in a game/pattern to find ${JSON.stringify(sQuery)}`))
    }
    return Promise.all(aPromises)
  }
  const getStub = () => {
    return [require('fs').readFileSync('./test.html').toString()]
  }

  const aHtml = await getData()
  // const aHtml = await getStub() // for testing
  if (Array.isArray(aHtml)) {
    return aHtml.map( html => {
      return getPostTitles(html)
    })
  }

  return []

}

go().then( res => {
  console.log({ action: 'go.success', res: res })
  if (Array.isArray(res)) {
    res.map( aData => {
      if (aData.length > 0) {
        console.log(aData)
        aData.map( oData => {
          execSync(`open ${oData.relUrl}`, (err,stdout,stderr) => {
            if (err) {
              throw err
            }
          })
        })
      }
    })
  }
})
.catch(err => {
  console.error({ action: 'go.err', err:err })
})