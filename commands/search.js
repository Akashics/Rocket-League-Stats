exports.name = "search";
exports.run = (client, message, args) => {

    const config = require('../config.json');
    const rls = require('rls-api');
    const request = require('request');

    const help = `You can use the command like this: r!search <platform> <user>`;

    var rlsstats = new rls.Client({
        token: `${config.rocketLeagueStatsKey}`
    });

    if (args[0] === 'steam' || args[0] === 'ps4' || args[0] === 'xbox') {
        if (args[0] === 'steam') {
            if (!args[1]) return message.channel.send(help);
            let username = isNaN(args[1]);
            if (username == false) {
                try {
                    return message.channel.send({ files: ["http://signature.rocketleaguestats.com/normal/steam/" + args[1] + ".png"] });
                } catch (e) {
                    console.log(e)
                    message.channel.send({ files: ["http://signature.rocketleaguestats.com/normal/steam/0.png"] });
                    return message.reply(`:x: An error has occured: ${e}`);
                }

            } else {
                try {
                    request('http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=' + config.steamKey + '&vanityurl=' + args[1], (error, response, body) => {
                        if (!error && response.statusCode === 200) {
                            const steamID64 = JSON.parse(body).response.steamid;
                            try {
                                return message.channel.send({ files: ["http://signature.rocketleaguestats.com/normal/steam/" + steamID64 + ".png"] });
                            } catch (e) {
                                message.channel.send({ files: ["http://signature.rocketleaguestats.com/normal/steam/0.png"] });
                                return message.reply(`:x: An error has occured: ${e}`);
                            }
                        }
                    });
                } catch (e) {
                    return message.reply(`:x: An error has occured: ${e}`);
                }
            }
        }
        if (args[0] === 'ps4') {
            if (!args[1]) return message.channel.send(help);
            try {
                message.channel.send({ files: ["http://signature.rocketleaguestats.com/normal/ps4/" + args[1] + ".png"] });
            } catch (e) {
                message.channel.send({ files: ["http://signature.rocketleaguestats.com/normal/ps4/0.png"] });
                return message.reply(`:x: An error has occured: ${e}`);
            }
        }
        if (args[0] === 'xbox') {
            if (!args[1]) return message.channel.send(help);
            try {
                message.channel.send('The API we use to receive data for gamertags is a bit slow. This will take a little bit.');
                return message.channel.send({ files: ["http://signature.rocketleaguestats.com/normal/xboxone/" + args[1] + ".png"] });
            } catch (e) {
                message.channel.send({ files: ["http://signature.rocketleaguestats.com/normal/xboxone/0.png"] });
                return message.reply(`:x: An error has occured: ${e}`);
            }
        }
    } else {
        return message.channel.send(help);
    }

}
