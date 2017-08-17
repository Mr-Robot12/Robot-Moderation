const Discord = require("discord.js");
const embed = new Discord.RichEmbed();
exports.run = function(client, message, args) {
  embed.setTitle("__To invite Robot Moderation to your server, use this link:__")
    .setDescription("**https://bot.discord.io/robotmoderation**")
  message.channel.sendMessage({
    embed
  });
}
