exports.name = "leaderboard";
exports.run = (client, message, args) => {

    var rls = require('rls-api');
    const config = require('../config.json');

    var STATS = new rls.Client({
        token: config.rocketLeagueStatsKey
    });

    const help = `You can use the command like this: r!leaderboard <stat|ranked> <unit> <number>`;

    if (args[0] === "stat" || args[0] === "ranked") {

        if (args[0] === "ranked") {
            var player = 0;
            var place = 0;
            console.log(args)
            if (args[2] !== undefined) {
                let value = isNaN(args[2]);
                if (value) {
                    player = 1;
                }
                player = args[2] - 1;
            }
            place = player + 1;

            if (player >= 0 && player <= 99) {
                console.log(player)
                if (["duel", "doubles", "solostandard", "standard"].indexOf(args[1]) > -1) {

                    var playlist = null;

                    switch (args[1]) {
                        case 'duel':
                            playlist = rls.rankedPlaylists.DUEL;
                            break;
                        case 'doubles':
                            playlist = rls.rankedPlaylists.DOUBLES;
                            break;
                        case 'solostandard':
                            playlist = rls.rankedPlaylists.SOLO_STANDARD;
                            break;
                        case 'solo':
                            playlist = rls.rankedPlaylists.STANDARD;
                            break;
                        default:
                            playlist = rls.rankedPlaylists.STANDARD;
                            break;
                    }

                    return STATS.getRankedLeaderboard(playlist, function (status, data) {
                        if (status === 200) {
                            console.log(data[player])
                            return message.channel.send(`${data[player].displayName} is Ranked #${place} in ${args[1]}.`, { files: [`${data[player].signatureUrl}`] });
                        }
                    });
                } else {

                }
            } else {
                return message.channel.send('Due to API restrictions, I can only show you the top 100 players.');
            }
        }
        if (args[0] === "stat") {
            var player = 0;
            var place = 0;
            console.log(args)
            if (args[2] !== undefined) {
                let value = isNaN(args[2]);
                if (value) {
                    player = 1;
                }
                player = args[2] - 1;
            }
            place = player + 1;

            if (player >= 0 && player <= 99) {
                if (["wins", "goals", "mvps", "saves", "shots", "assists"].indexOf(args[1]) > -1) {


                    var playlist = null;

                    switch (args[1]) {
                        case 'wins':
                            playlist = rls.statType.WINS;
                            break;
                        case 'assists':
                            playlist = rls.statType.ASSISTS;
                            break;
                        case 'mvps':
                            playlist = rls.statType.MVPS;
                            break;
                        case 'goals':
                            playlist = rls.statType.GOALS;
                            break;
                        case 'shots':
                            playlist = rls.statType.SHOTS;
                            break;
                        case 'saves':
                            playlist = rls.statType.SAVES;
                            break;
                        default:
                            playlist = rls.statType.WINS;
                            break;
                    }

                    return STATS.getStatLeaderboard(playlist, function (status, data) {
                        console.log(data[player])
                        return message.channel.send(`${data[player].displayName} is Ranked #${place} in ${args[1]}.`, { files: [`${data[player].signatureUrl}`] });

                    });

                
            }
        } else {
            return message.channel.send(help);
        }
    }
}
}
