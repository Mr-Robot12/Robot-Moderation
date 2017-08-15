const Discord = require("discord.js");
const client = new Discord.Client();
const settings = require("./settings.json");
var prefix = "!";
client.on('ready', () => {
  console.log(`I'm online!`);
  client.user.setGame("on that good discord server | discord.li/mrrobot");
  client.user.setStatus("online");
})

client.on('message', msg => {
  if (msg.content === prefix + 'ping') {
    msg.reply(`Pong! Our ping connection is ${client.ping}ms!`);
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'avatar') {
    msg.reply(`your avatar link is ` + msg.author.avatarURL);
  }
})

client.on('message', msg => {
  if(msg.content.startsWith(prefix + "kick")) {
    let member = msg.mentions.members.first();
    let reason = msg.content.split(/\s+/g).slice(2).join(" ");
    member.kick(reason);
    msg.reply(`${msg.mentions.members.first()} has been kicked!`);
    msg.reply(`Check the Audit Log for the reason!`);
  }
});

client.on('message', msg => {
  if(msg.content.startsWith(prefix + "ban")) {
    let member = msg.mentions.members.first();
    let reason = msg.content.split(/\s+/g).slice(2).join(" ");
    member.ban(reason);
    msg.reply(`${msg.mentions.members.first()} has been banned!`);
    msg.reply(`Check the Audit Log for the reason!`);
  }
});

client.login(settings.token);
