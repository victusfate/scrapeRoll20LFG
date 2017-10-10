const rp        = require('request-promise')
const cheerio   = require('cheerio')
const path      = require('path')

const NPages    = 5;
const sQuery    = process.argv[2] ? ('' + process.argv[2]).toLowerCase() : null
const sRoot     = 'https://app.roll20.net'
const sBaseUrl  = `${sRoot}/forum/category/22`

const go = async () => {

  const getPostTitles = (html) => {
    const $     = cheerio.load(html)    
    let aData   = []
    $('.title').each( function(i,oTest) {
      const sHref = $(this).children().first().attr('href')
      const sText = $(this).children().first().text()
      const sData = $(this).html()
      if (!sData.includes('picto') && sText.toLowerCase().includes(sQuery)) {
        aData.push({ relUrl: path.join(sRoot,sHref), sText: sText })
      }
    })
    console.log({ aData: aData })
    return aData
  }

  const getData = async () => {
    let aPromises = []
    if (typeof sQuery === 'string' && sQuery.length > 0) {
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
      return Promise.reject(Error(`sQuery not defined, pass in a game/pattern to find ${JSON.stringify(sQuery)}`))
    }
    return Promise.all(aPromises)
  }
  const getStub = () => {
    return [require('fs').readFileSync('./test.html').toString()]
  }

  const aHtml = await getData()
  // const aHtml = await getStub()
  if (Array.isArray(aHtml)) {
    return aHtml.map( html => {
      return getPostTitles(html)
    })
  }

  return null

}

go().then( res => {
  console.log({ action: 'go.success', res: res })
  if (Array.isArray(res)) {
    res.map( oData => {
      console.log(oData)
    })
  }
})
.catch(err => {
  console.error({ action: 'go.err', err:err })
})