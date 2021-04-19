module.exports = {
	name: 'kick',
	description: 'Kicks the tagged member from the server',
	execute(message) {
		const targetMember = message.mentions.members.first();
		if (!targetMember) {
			message.channel.send('Please mention a member to kick!');
		}
		else {
			message.channel.send(`I have kicked ${targetMember} from ${message.guild.name}`);
			targetMember.kick();
		}
	},
};