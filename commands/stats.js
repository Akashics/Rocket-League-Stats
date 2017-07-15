exports.name = "stats";
exports.run = (client, message, args) => {

    const config = require('../config.json');
    const rls = require('rls-api');
    const request = require('request');
    //Lets start the rlsstats
    var rlsstats = new rls.Client({
        token: `${config.rocketLeagueStatsKey}`
    });

    /*rlsstats.getPlaylistsData(function (status, data) {
        if (status == 200) {
            console.log("-- Playlists data:");
            console.log(data);
        }
    });

    rlsstats.getTiersData(function (status, data) {
        if (status == 200) {
            console.log("-- Tiers data:");
            console.log(data);
        }
    });

    rlsstats.getRankedLeaderboard(rls.rankedPlaylists.DUEL, function (status, data) {
        if (status == 200) {
            console.log(data)
        }
    });*/

    rlsstats.getStatLeaderboard(rls.statType.GOALS, function (status, data) {
        if (status == 200) {
            console.log(data);
        }
    });
}