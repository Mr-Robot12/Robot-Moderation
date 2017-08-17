const Discord = require("discord.js");
const client = new Discord.Client();
const settings = require("./settings.json");
const embed = new Discord.RichEmbed();
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
  if (msg.content.startsWith(prefix + "kick")) {
    let member = msg.mentions.members.first();
    let reason = msg.content.split(/\s+/g).slice(2).join(" ");
    member.kick(reason);
    msg.reply(`${msg.mentions.members.first()} has been kicked!`);
    msg.reply(`Check the Audit Log for the reason!`);
  }
});

client.on('message', msg => {
  if (msg.content.startsWith(prefix + "ban")) {
    let member = msg.mentions.members.first();
    let reason = msg.content.split(/\s+/g).slice(2).join(" ");
    member.ban(reason);
    msg.reply(`${msg.mentions.members.first()} has been banned!`);
    msg.reply(`Check the Audit Log for the reason!`);
  }
});

client.on('message', msg => {
  if (msg.content.startsWith(prefix + "help")) {
    embed.setTitle("**__Robot-Moderation Help Menu__**")
      .setDescription("help: Brings you to this menu. \n ping: Pings your connection. \n avatar: Gives you your Discord avatar link. \n kick: Kicks a user, with an optional reason. \n ban: Bans a user, with an optional reason. \n about: Information about Robot Moderation. \n invite: Shows the invite link for adding Robot Moderation to your server. \n announce: Posts a mini announcement in an embed with whatever text you want.")
      .setThumbnail(msg.author.avatarURL)
    msg.author.sendMessage({
      embed
    });
  }
});

client.on('message', msg => {
  if (msg.content.startsWith(prefix + "setup")) {
    var guild = msg.guild;
    msg.reply('A Staff role has been created!');
    guild.createRole({
      name: 'Staff',
      color: '#FF0000',
      mentionable: true
    }).catch(error => console.log(error));
  }
})

client.on('message', msg => {
  if (msg.content.startsWith(prefix + "about")) {
    embed.setTitle("__About__")
      .setDescription("**Robot Moderation to a bot coded by Dan#3769 and Mr Robot#8472, made for the Mr Robot Community Discord Server.**")
      .setImage("https://cdn.discordapp.com/attachments/274843090076958721/346968526684422144/hypesquad-white.png")
    msg.channel.sendMessage({
      embed
    });
  }
});

client.on('message', msg => {
  if (msg.content.startsWith(prefix + "invite")) {
    embed.setTitle("__To invite Robot Moderation to your server, use this link:__")
    .setDescription("**https://bot.discord.io/robotmoderation**")
    msg.channel.sendMessage({
      embed
    });
  }
})

client.on('message', msg => {
  if (msg.content.startsWith(prefix + "announce")) {
    let text = msg.content.split(/\s+/g).slice(1).join(" ");
    console.log(text);
    embed.setTitle("__Announcement__")
      .setDescription("\n" + text)
    msg.channel.send({
      embed
    });
    msg.channel.sendMessage("**⚠️ This command is still in development!**");
  }
})

client.login(settings.token);
