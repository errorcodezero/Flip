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

// Listens for messages
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!args.length && command) {
		message.channel.send('Please enter arguements');
	}
});

// Logs into Discord client
client.login(token);