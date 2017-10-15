const Discord = require('discord.js');

exports.run = function(client, message, args) {
	if(message.mentions.users.size === 0) {
		message.channel.send(`**${message.author} You need to mention a user! :bangbang:**`);
	}
	const embed = new Discord.RichEmbed();
	embed.setTitle(`__Profile for ${message.mentions.members.first().user.tag}__`)
	.addField("Username", message.mentions.members.first().user.username)
	.addField("ID", message.mentions.members.first().user.id)
	.addField("Created At", message.mentions.members.first().user.createdAt)
	.setThumbnail(message.mentions.members.first().user.avatarURL)
	.setColor(message.mentions.members.first().highestRole.color)
	message.channel.send({embed});
}
