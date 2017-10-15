const Discord = require('discord.js');

exports.run = function(client, message, args) {
	const embed = new Discord.RichEmbed();
	guild = message.guild;
	embed.setTitle(`__Server Info for ${guild.name}__`)
	.setColor("#551a8b")
	.addField("Name", guild.name)
	.addField("ID", guild.id)
	.addField("Created At", guild.createdAt)
	.addField("Owner", guild.owner)
	.addField("Member Count", guild.memberCount)
	.addField("Location", guild.region)
	.setThumbnail(guild.iconURL)
	message.channel.send({embed});
}
