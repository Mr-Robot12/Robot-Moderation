exports.run = function(client, message, args) {
  let member = message.mentions.members.first();
  let reason = message.content.split(/\s+/g).slice(2).join(" ");
  member.kick(reason);
  message.reply(`${message.mentions.members.first()} has been kicked!`);
  message.reply(`Check the Audit Log for the reason!`);
}
