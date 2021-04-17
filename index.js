// Modules
require('dotenv').config();
const Discord = require('discord.js');

// Discord client
const client = new Discord.Client();

// Variables stored in process.env
const token = process.env.BOT_TOKEN;
const prefix = process.env.BOT_PREFIX;

// Runs once ready
client.once('ready', () => {
	console.log(`Ready and the prefix is ${prefix}`);
});

// Logs into Discord client
client.login(token);