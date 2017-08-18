const Discord = require('discord.js');
const embed = new Discord.RichEmbed();

exports.run = function(client,message, args) {
  embed.setTitle("__Robot Moderation Help__")
  .setDescription("**The prefix for Robot Moderation is `!`**\n **The list of commands are here: http://mrrobotcommunity.tk/robotmoderation.html**")
  .setThumbnail("http://mrrobotcommunity.tk/assets/avatar.jpg")
  message.channel.send({embed});
}
