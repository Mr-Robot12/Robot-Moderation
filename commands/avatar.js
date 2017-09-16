const Discord = require('discord.js');

exports.run = function(client, message, args) {
 	const embed = new Discord.RichEmbed();
 	embed.setTitle(`__Avatar for ${message.author.tag}__`)
 	.setImage(message.author.avatarURL)
 	message.channel.send({embed});
}
