const Discord = require("discord.js");
const client = new Discord.Client();
const settings = require("./settings.json");
const embed = new Discord.RichEmbed();
var prefix = "{";
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

client.on('message', msg => {
  if(msg.content.startsWith(prefix + "help")) {
    embed.setTitle("**__Robot-Moderation Help Menu__**")
    .setDescription("help: Brings you to this menu. \n ping: Pings your connection. \n avatar: Gives you your Discord avatar link. \n kick: Kicks a user, with an optional reason. \n ban: Bans a user, with an optional reason.")
    .setThumbnail(msg.author.avatarURL)
    msg.author.sendMessage({embed});
  }
});

client.login(settings.token);
