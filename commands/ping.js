exports.run = function(client, message, args) {
  message.reply(`**Pong!** Our ping connection is ${client.ping}ms!`);
}
