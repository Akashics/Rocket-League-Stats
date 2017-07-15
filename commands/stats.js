exports.name = "stats";
exports.run = (client, message, args) => {

    const config = require('../config.json');
    const request = require('request');
    if (!args) {
        return message.channel.send('Please refer back to the help document.');
    }
    if (args[0] === 'profile' || args[0] === 'id') {
        if (args[0] == "profile") {
            if (args[1].length > 1) {
                message.channel.startTyping();
                request('http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=' + config.steamKey + '&vanityurl=' + args[1], (error, response, body) => {
                    if (!error && response.statusCode === 200) {
                        const steamID64 = JSON.parse(body).response.steamid;
                        console.log(steamID64)
                        try {
                            message.channel.send({ files: ["http://signature.rocketleaguestats.com/normal/steam/" + steamID64 + ".png"] });
                            return message.channel.stopTyping();
                        } catch (e) {
                            console.log(e)
                            message.channel.stopTyping();
                            return message.reply(`:x: An error has occured: ${e}`);
                        }
                    }
                });
            } else {
                return message.channel.send('Please provide me a profile name to lookup.');
            }
        }
        if (args[0] == "id") {
            if (args[1].length = 17) {
                try {
                    message.channel.startTyping();
                    message.channel.send({ files: ["http://signature.rocketleaguestats.com/normal/steam/" + args[1] + ".png"] });
                    return message.channel.stopTyping();
                } catch (e) {
                    console.log(e)
                    message.channel.stopTyping();
                    return message.reply(`:x: An error has occured: ${e}`);
                }
            } else {
                return message.channel.send('You need to have 17-digit ID Number to provide me with.');
            }
        }
    } else {
        return message.channel.send(`That didn't seem right, why don't you try again?`);
    }
}