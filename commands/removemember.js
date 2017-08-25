const Discord = require('discord.js');
const embed = new Discord.RichEmbed();

exports.run = function(client, message, args) {
  if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("**✋ You don't have permission to use this command!**");
  var guild = message.guild;
  var member = message.mentions.members.first();
  guild.member(message.mentions.members.first()).removeRole('347322157606502422').catch(error => console.log(error));
  embed.setTitle("__Member Role Given__")
  .setDescription(`The Member Role has been taken away from ${member}.`)
  message.channel.send({embed});
}
