exports.name = "eval";
exports.run = async (client, message, args) => {

    if (message.author.id !== '201077739589992448') return;
    if (!message.guild || !message.member) return;
    var code = args.join(" ");
    try {
        var evaled = eval(code);
        if (evaled && evaled.constructor.name == 'Promise')
            evaled = await evaled;
        if (typeof evaled !== 'string')
            evaled = require('util').inspect(evaled);
        message.channel.send(`\`\`\`xl\n${clean(client, evaled)}\n\`\`\``
        );
    }
    catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(client, err)}\n\`\`\``);
    }

    function clean(client, text) {
        if (typeof (text) === "string") {
            return text.replace(/`/g, "`" + String.fromCharCode(8203))
                .replace(/@/g, "@" + String.fromCharCode(8203))
                .replace(client.token, "https://youtu.be/dQw4w9WgXcQ");
        }
        else {
            return text;
        }
    }
}