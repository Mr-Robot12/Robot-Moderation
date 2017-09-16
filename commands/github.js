const Discord = require('discord.js');
const embed = new Discord.RichEmbed();

exports.run = function(client, message, args) {
  embed.setTitle("__Robot Moderation Source Code__")
  .setColor("#ffa500")
    .setDescription("**Robot Moderation is open-source!\n The source code is over at https://github.com/Mr-Robot12/Robot-Moderation**")
    .setThumbnail("https://assets-cdn.github.com/images/modules/logos_page/Octocat.png")
  message.channel.send({embed});
}
