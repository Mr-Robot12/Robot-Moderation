const Discord = require("discord.js");
const embed = new Discord.RichEmbed();
exports.run = function(client, message, args) {
  //   Permissions currently broken!    // if (message.author.permlvl > 2) return message.channel.sendMessage("**You don't have permission to use this command!**");
  let text = message.content.split(/\s+/g).slice(1).join(" ");
  console.log(text);
  embed.setTitle("__Announcement__")
    .setDescription("\n" + text)
  message.channel.send({
    embed
  });
  message.channel.sendMessage("**⚠️ This command is still in development!**");
}
