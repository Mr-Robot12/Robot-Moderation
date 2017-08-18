const Discord = require("discord.js");
const client = new Discord.Client();
const settings = require("./settings.json");
const embed = new Discord.RichEmbed();
require('./util/eventLoader')(client);
var prefix = "{";

var reload = (message, cmd) => {
  delete require.cache[require.resolve('./commands/' + cmd)];
  try {
    let cmdFile = require('./commands/' + cmd);
  } catch (err) {
    message.channel.sendMessage(`Problem loading ${cmd}: ${err}`).then(
      response => response.delete(1000).catch(error => console.log(error.stack))
    ).catch(error => console.log(error.stack));
  }
  message.channel.sendMessage(`${cmd} reload was a success!`).then(
    response => response.delete(1000).catch(error => console.log(error.stack))
  ).catch(error => console.log(error.stack));
};
exports.reload = reload;

client.elevation = function(message) {
  let permlvl = 0;
  let member_role = message.guild.roles.find('name', 'Member');
  if (member_role && message.guild.roles.has(member_role.id)) permlvl = 0;
  let mod_role = message.guild.roles.find('name', 'Moderator');
  if (mod_role && message.member.roles.has(mod_role.id)) permlvl = 2;
  let admin_role = message.guild.roles.find('name', 'Administrator');
  if (admin_role && message.member.roles.has(admin_role.id)) permlvl = 3;
  let owner_role = message.guild.roles.find('name', 'Ovners');
  if (message.author.id === owner_role.id) permlvl = 4;
  return permlvl;
}

client.login(settings.token);
