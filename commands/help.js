// CURRENTLY BROKEN!
// CURRENTLY BROKEN!
// CURRENTLY BROKEN!
// CURRENTLY BROKEN!
// CURRENTLY BROKEN!
// CURRENTLY BROKEN!
// CURRENTLY BROKEN!
// CURRENTLY BROKEN!
// CURRENTLY BROKEN!
// CURRENTLY BROKEN!
// CURRENTLY BROKEN!
// CURRENTLY BROKEN!
// CURRENTLY BROKEN!
// CURRENTLY BROKEN!
// CURRENTLY BROKEN!
// CURRENTLY BROKEN!
const Discord = require('discord.js');
const embed = new Discord.RichEmbed();

exports.run = function(client, message, args) {
  embed.setTitle("__The help command__")
    .setDescription("**The help command is currently broken and is being worked on, and will hopefully be fixed soon.**")
    .setThumbnail("http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4c2.png")
  message.channel.send({
    embed
  });
}


//  exports.run = function(client, message, args) {
//  message.author.send({
//    embed: {
// title: "__not telling youuuu Help Menu__",
//  description: "This is the help menu for the not telling youuu Discord Bot."
//fields: [{
//      name: "help",
//      value: "DMs you this help menu."
//    },
//    {
//      name: "avatar",
//      value: "Posts a link to your avatar."
//    },
//    {
//      name: "ban",
//      value: "Bans the mentioned user."
//    },
//    {
//      name: "kick",
//      value: "Kicks the mentioned user."
//    },
//    {
//      name: "ping",
//      value: "Pings your connection to the bot with an milliseconds value."
//    },
//    {
//      name: "purge",
//      value: "Purges the given amount of messages in a given channel."
//    },
//    {
//      name: "reload",
//      value: "Reloads a given commmand."
//    },
//    {
//      name: "about",
//      value: "Posts an embed explaining about Robot Moderation."
//    },
//    {
//      name: "announce",
//      value: "Posts an embed with any text that you want."
//    },
//    {
//      name: "invite",
//      value: "Posts an embed with an invite link to invite not telling youuu to your server."
//    },
//    {
//      name: "setup",
//      value: "Sets you up with a Staff role."
//    }
//  ],
//  timestamp: new Date(),
//  footer: {
//    icon_url: client.user.avatarURL,
//    text: "Contact Dan#3769 if you're having problems."
//  }
//});
//}
