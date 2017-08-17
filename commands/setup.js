exports.run = function(client, message, args) {
  var guild = message.guild;
  message.reply('A Staff role has been created!');
  guild.createRole({
    name: 'Staff',
    color: '#FF0000',
    mentionable: true
  }).catch(error => console.log(error));
}
