const Discord = require("discord.js");
const embed = new Discord.RichEmbed();
exports.run = function(client, message, args) {
  embed.setTitle("__About__")
    .setDescription("**Robot Moderation to a bot coded by Dan#3769 and Mr Robot#8472, made for the Mr Robot Community Discord Server.**")
    .setThumbnail("https://cdn.discordapp.com/attachments/274843090076958721/346968526684422144/hypesquad-white.png")
  message.channel.sendMessage({
    embed
  });
}
