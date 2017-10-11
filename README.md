find a group since roll20s lfg doesn't work for most recent data

to install:

    git clone https://github.com/victusfate/scrapeRoll20LFG.git
    cd scrapeRoll20LFG
    npm install


to run:

    messel@messels-MBP:~/Desktop/Dropbox/code/js/scrapeRoll20LFG$ node test.js lfp AND rifts lfp AND starfinder lfp AND supernatural 
    aQueries [ 'rifts', 'starfinder', 'supernatural' ]
    sUrl https://app.roll20.net/forum/category/22
    sUrl https://app.roll20.net/forum/category/22?p=1
    sUrl https://app.roll20.net/forum/category/22?p=2
    sUrl https://app.roll20.net/forum/category/22?p=3
    sUrl https://app.roll20.net/forum/category/22?p=4
    sUrl https://app.roll20.net/forum/category/22?p=5
    sUrl https://app.roll20.net/forum/category/22?p=6
    sUrl https://app.roll20.net/forum/category/22?p=7
    sUrl https://app.roll20.net/forum/category/22?p=8
    sUrl https://app.roll20.net/forum/category/22?p=9
    { aData: 
       [ { relUrl: 'https:/app.roll20.net/forum/post/5629657/lfg-mon-slash-tues-evenings-et-2-players-beyond-the-supernatural-slash-rifts-slash-savage-worlds-future-slash-fantasy-settings',
           sText: '[LFG] Mon/Tues evenings ET 2 players Beyond the Supernatural/Rifts/Savage World\'s future/fantasy settings' },
         { relUrl: 'https:/app.roll20.net/forum/post/5534159/starfinder-gm-looking-for-players',
           sText: 'Starfinder GM looking for players' },
         { relUrl: 'https:/app.roll20.net/forum/post/5559742/lfgm-group-of-4-looking-for-gm-pathfinder-slash-starfinder-ap',
           sText: '[LFGM] Group of 4 looking for GM Pathfinder/Starfinder AP' } ] }
    { aData: [] }
    { aData: 
       [ { relUrl: 'https:/app.roll20.net/forum/post/5575290/lfp-savage-rifts-thursday-9pm-pacific',
           sText: '[LFP] Savage Rifts, Thursday, 9pm Pacific' } ] }
    { aData: [] }
    { aData: 
       [ { relUrl: 'https:/app.roll20.net/forum/post/5604661/lfg-pathfinder-starfinder-d-and-d3-dot-5e-d-and-d5e-pst-new-to-roll20',
           sText: 'LFG [Pathfinder][Starfinder][D&D3.5e][D&D5e] PST New to Roll20' } ] }
    { aData: [] }
    { aData: 
       [ { relUrl: 'https:/app.roll20.net/forum/post/5591055/hosting-starfinder-starfinder-meridian-station-black-star-problem',
           sText: '[Hosting] [Starfinder] Starfinder Meridian Station: Black Star Problem' },
         { relUrl: 'https:/app.roll20.net/forum/post/5587945/lfg-starfinder-time-flexible',
           sText: '[LFG] Starfinder, time flexible' },
         { relUrl: 'https:/app.roll20.net/forum/post/5587514/lfplayers-starfinder-weekly-friday-9-30pm-eastern-us-time-need-one-more-player-new-players-are-welcome',
           sText: '[LFPlayers][Starfinder][Weekly, Friday 9:30pm Eastern US Time] Need One More Player, New Players Are Welcome!' } ] }
    { aData: 
       [ { relUrl: 'https:/app.roll20.net/forum/post/5573476/looking-to-hire-gm-for-starfinder-paid',
           sText: 'Looking to Hire GM for Starfinder [PAID]' } ] }
    { aData: [] }
    { aData: 
       [ { relUrl: 'https:/app.roll20.net/forum/post/5567693/savage-rifts-gm-looking-for-another-player',
           sText: 'Savage Rifts GM: Looking for another player' } ] }
    { action: 'go.success',
      res: 
       [ [ [Object], [Object], [Object] ],
         [],
         [ [Object] ],
         [],
         [ [Object] ],
         [],
         [ [Object], [Object], [Object] ],
         [ [Object] ],
         [],
         [ [Object] ] ] }
    [ { relUrl: 'https:/app.roll20.net/forum/post/5629657/lfg-mon-slash-tues-evenings-et-2-players-beyond-the-supernatural-slash-rifts-slash-savage-worlds-future-slash-fantasy-settings',
        sText: '[LFG] Mon/Tues evenings ET 2 players Beyond the Supernatural/Rifts/Savage World\'s future/fantasy settings' },
      { relUrl: 'https:/app.roll20.net/forum/post/5534159/starfinder-gm-looking-for-players',
        sText: 'Starfinder GM looking for players' },
      { relUrl: 'https:/app.roll20.net/forum/post/5559742/lfgm-group-of-4-looking-for-gm-pathfinder-slash-starfinder-ap',
        sText: '[LFGM] Group of 4 looking for GM Pathfinder/Starfinder AP' } ]
    [ { relUrl: 'https:/app.roll20.net/forum/post/5575290/lfp-savage-rifts-thursday-9pm-pacific',
        sText: '[LFP] Savage Rifts, Thursday, 9pm Pacific' } ]
    [ { relUrl: 'https:/app.roll20.net/forum/post/5604661/lfg-pathfinder-starfinder-d-and-d3-dot-5e-d-and-d5e-pst-new-to-roll20',
        sText: 'LFG [Pathfinder][Starfinder][D&D3.5e][D&D5e] PST New to Roll20' } ]
    [ { relUrl: 'https:/app.roll20.net/forum/post/5591055/hosting-starfinder-starfinder-meridian-station-black-star-problem',
        sText: '[Hosting] [Starfinder] Starfinder Meridian Station: Black Star Problem' },
      { relUrl: 'https:/app.roll20.net/forum/post/5587945/lfg-starfinder-time-flexible',
        sText: '[LFG] Starfinder, time flexible' },
      { relUrl: 'https:/app.roll20.net/forum/post/5587514/lfplayers-starfinder-weekly-friday-9-30pm-eastern-us-time-need-one-more-player-new-players-are-welcome',
        sText: '[LFPlayers][Starfinder][Weekly, Friday 9:30pm Eastern US Time] Need One More Player, New Players Are Welcome!' } ]
    [ { relUrl: 'https:/app.roll20.net/forum/post/5573476/looking-to-hire-gm-for-starfinder-paid',
        sText: 'Looking to Hire GM for Starfinder [PAID]' } ]
    [ { relUrl: 'https:/app.roll20.net/forum/post/5567693/savage-rifts-gm-looking-for-another-player',
        sText: 'Savage Rifts GM: Looking for another player' } ]
    