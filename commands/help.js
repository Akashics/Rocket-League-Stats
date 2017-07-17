exports.name = "help";
exports.run = (client, message) => {
    try {
        message.author.send(`
= Command List =

[Use s!help <commandname> for details]

r!help          :: You are here.
r!info          :: Requests information about the bot..
r!leaderboard   :: Surf the ranks of others!
r!ping          :: Prints latency times.
r!shrug         :: ¯\\_(ツ)_/¯
r!search        :: Lookup a player based on Steam, PS4 or Xbox One Tags.


r!leaderboard <stat|ranked> <unit> <place (defaults to 1st)>
r!search <steam|ps4|xbox> <username>

Bot created by Kashall#1307, API provided by RocketLeagueStats.com
Sourcecode Available on Github in Kashalls/Rocket-League-Stats`, { code: "asciidoc" });
    } catch (e) {
        message.channel.send(e);
    }

}