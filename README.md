# Rocket-League-Stats Discord Bot

> I AM NOT RESPONSIBLE AND CANNOT BE HELD LIABLE IF YOU MESS UP WITH BOTS. THIS INCLUDES BUT IS NOT LIMITED TO LOSING PRIVILEGES, GETTING KICKED OR BANNED FROM SERVERS, OR BEING BANNED.

Also, an important point is: this requires *some* knowledge of javascript and your operating system to be able to use. If you don't know JavaScript, you're going to have a bad time.

Rocket-League-Stats is built using the [Discord.js](http://discord.js.org/) library version 12.0.0-dev, which is installed automatically when running `npm install` as per the install steps below.

## Requirements

- `git` command line ([Windows](https://git-scm.com/download/win)|[Linux](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)|[MacOS](https://git-scm.com/download/mac)) installed
- `node` [Version 8.0.0 or higher](https://nodejs.org)
- `a machine` to host it on. Want it to be online 24/7? Use a machine that is online that long.
- `some intellectual sense` If you don't intend to read the rest of this document, you shouldn't bother using this bot.
- `some knowledge of node` because its up to you to figure out how things work.

## Downloading

In a command prompt in your projects folder (wherever that may be) run the following:

`git clone https://github.com/Kashalls/Rocket-League-Stats.git`

Once finished: 

- In the folder from where you ran the git command, run `cd Rocket-League-Stats` and then run `npm install`
- Rename `config.json.example` to `config.json`
- Edit `config.json` and enter your token and other details as indicated.

## Getting Your Discord Token

1. Follow the guide [here](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token).

> **KEEP YOUR TOKEN SECRET, AND NEVER SHARE IT WITH ANYONE**

## Starting the Bot

To start the bot, in the command prompt, run the following command:
`node bot.js`

> If you get an error about SQLite not being available or not building, run `npm rebuild` and run the bot again.

> If at any point it says "cannot find module X" just run `npm install X` and try again.

For support join the [RocketLeagueStats](https://discord.gg/fJ5dd25) Discord.


