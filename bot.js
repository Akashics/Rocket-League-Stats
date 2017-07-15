const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const config = require('./config.json');
const colors = require('colors');
const commands = new Discord.Collection();

function loadCommands() {
  const commandsRequire = require('./commands/');
  for (const file in commandsRequire) {
    commands.set(commandsRequire[file].name, commandsRequire[file]);
  }
}

client.on('ready', () => {
  loadCommands();
  console.log('');
  console.log(`Rocket League Bot Up and Running.`.bold.green)
  client.user.setGame('r!help ')
});

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});

client.on("message", message => {
  if (message.channel.type == 'dm' || message.channel.type == 'group') return;
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);
  let commandFile = commands.get(command);
  if (!commandFile) {
    return;
  } else {
    try {
      commandFile.run(client, message, args);
    } catch (e) {
      console.log(e)
    }
  }
});

client.login(config.token);