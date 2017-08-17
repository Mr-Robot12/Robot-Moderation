const Discord = require("discord.js");
const embed = new Discord.RichEmbed();
exports.run = function(client, message, args) {
  let text = message.content.split(/\s+/g).slice(1).join(" ");
  console.log(text);
  embed.setTitle("__Announcement__")
    .setDescription("\n" + text)
  message.channel.send({
    embed
  });
  message.channel.sendMessage("**⚠️ This command is still in development!**");
}
