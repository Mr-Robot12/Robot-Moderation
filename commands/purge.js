exports.run = function(client, message, args) {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("**✋ You don't have permission to use this command!**");
  let messagecount = parseInt(args.join(' '));
  message.channel.fetchMessages({
    limit: messagecount
  }).then(messages => message.channel.bulkDelete(messages));
  message.channel.sendMessage(messagecount + " messages have been purged.");
}
