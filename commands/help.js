exports.name = "help";
exports.run = (client, message) => {
    try {
        message.author.send(`
= Command List =

[Use s!help <commandname> for details]

r!info          :: Requests information about the bot..
r!ping          :: Prints latency times.
r!shrug         :: ¯\\_(ツ)_/¯
r!stats         :: Pull stats from rocketleaguestats.com

Bot created by Kashall#1307, API provided by RocketLeagueStats.com`, { code: "asciidoc" });
    } catch (e) {
        message.channel.send(e);
    }

}