module.exports = {
	name: 'say',
	aliases: ['send'],
	execute(message, args) {
		if (!args.length) {
			message.channel.send('Please add arguements on what to send');
		}
		else {
			message.channel.send(args.join(' '));
		}
	},
};