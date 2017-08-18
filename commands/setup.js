exports.run = function(client, message, args) {
  if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("**✋ You don't have permission to use this command!**");
  var guild = message.guild;
  message.reply('A Staff role has been created!');
  guild.createRole({
    name: 'Staff',
    color: '#FF0000',
    mentionable: true
  }).catch(error => console.log(error));
}
