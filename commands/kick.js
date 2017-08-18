exports.run = function(client, message, args) {
  if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.sendMessage("**✋ You don't have permission to use this command!**");
  let member = message.mentions.members.first();
  let reason = message.content.split(/\s+/g).slice(2).join(" ");
  member.kick(reason);
  message.reply(`${message.mentions.members.first()} has been kicked!`);
  message.reply(`Check the Audit Log for the reason!`);
}
