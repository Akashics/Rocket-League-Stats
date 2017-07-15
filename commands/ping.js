exports.name = "ping";
exports.run = (client, message, args) => {
    message.channel.send('Pinging...').then(sent => {
    sent.edit(`:ping_pong:  Pong! Took ${sent.createdTimestamp - message.createdTimestamp}ms roundtrip.`);
});
}