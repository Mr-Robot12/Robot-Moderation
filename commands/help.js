const Discord = require('discord.js');
const embed = new Discord.RichEmbed();

exports.run = function(client,message, args) {
  embed.setTitle("__Robot Moderation Help__")
  .setColor("#ffa500")
  .setDescription("**This is the help menu for Robot Moderation.**")
  .setThumbnail("http://mrrobotcommunity.tk/assets/avatar.jpg")
  .addField("about", "Posts an embed explaining some information about Robot Moderation. `!about`")
  .addField("announce", "Posts an embed with whatever text you want. `!announce [text]`")
  .addField("avatar", "Posts an embed with your avatar URL. `!avatar`")
  .addField("ban", "Bans a mentioned user. `!ban [user] [reason]`")
  .addField("github", "Posts a GitHub Repository for Robot Moderation. `!github`")
  .addField("help", "DMs you this embed. `!help`")
  .addField("invite", "Posts an invite link too add Robot Moderation to your server. `!invite`")
  .addField("kick", "Kicks a mentioned user. `!kick [user] [reason]`")
  .addField("ping", "Pings your connection to the bot with a milliseconds value. `!ping`")
  .addField("purge", "Purges a particular amount of messages. `!purge [amount of messages]`")
  .addField("reload", "Reloads a command, without needing to restart the bot. `!reload [command]`")
  message.author.send({embed});
  message.channel.send("**I've PM'd you the help menu! :wink:**");
}
