const http = require("http");
const express = require("express");
const Discord = require("discord.js");
const client = new Discord.Client();
const token = "NjY1NjYwNTM3NDU5MTc5NTcz.Xho2rw.k8li5PF_xr9zHQ0wRDjqKAVellw" 
const snekfetch = require("snekfetch");
const prefix = '!';
const key = ("7f79186d-de88-440d-b4c2-d47127d6f658");
const fs = require("fs");
//Command Reader
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./cmds/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./cmds/${file}`);
    client.commands.set(command.name,command);
}
//Bot Startup
client.on('ready' , () => {
    console.log("Connected as "+ client.user.tag);
    var memberlist = client.users.cache.size;
     function formatNumber(num) {
        var num_parts = num.toString().split(".");
        num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return num_parts.join(".");
        }
    var mlist = formatNumber(memberlist);
client.user.setActivity(`${mlist} Users! | !help also works in DM`, {type: "WATCHING"});
});
//Welcome Message
client.on('guildMemberAdd', member => {
try{
var lucid = member.guild.channels.cache.get('556606325165916172');
var verify = member.guild.channels.cache.get('743429334496313375').toString();
lucid.send(`<@${member.id}> Welcome to the **Lucid Discord**. Make sure you head to ${verify} and follow the steps to be verified!`);
let urole = member.guild.roles.cache.find(role => role.name === "Unverified");
member.roles.add(urole.id);
} catch{}
});
//Auto Update
client.on('message', message => {
        try {
  if(message.member.roles.cache.some(r=>["Verified"].includes(r.name))) {
     client.commands.get('auto_update').execute(message);
   }
  } catch {}
});
//Main Commands
client.on('message', message => {
if (!message.content.startsWith(prefix)) return
  let args = message.content.substring(prefix.length).split(" ");

  switch (args[0]) {
      
    case "v":
      client.commands.get('v').execute(message, args);
      
    break;
      
    case "help":
      client.commands.get('help').execute(message, args);
    break;
      
    case "bw":
      client.commands.get('bedwars').execute(message, args);
    break;

    case "pb":
      client.commands.get('paintball').execute(message, args);
    break;

    case "sh":
      client.commands.get('smash').execute(message, args);
    break;

    case "sw":
      client.commands.get('skywars').execute(message, args);
    break;

    case "mm":
      client.commands.get('murder_mystery').execute(message, args);
    break;

    case "mw":
      client.commands.get('mega_walls').execute(message, args);
    break;

    case "bb":
      client.commands.get('build_battle').execute(message, args);
    break;

    case "qc":
      client.commands.get('quake').execute(message, args);
    break;

    case "pit":
      client.commands.get('pit').execute(message, args);
    break;

    case "cvc":
      client.commands.get('cop_v_crim').execute(message, args);
    break;

    case "duels":
      client.commands.get('duels').execute(message, args);
    break;

    case "walls":
      client.commands.get('walls').execute(message, args);
    break;
      
    case "profile":
      client.commands.get('profile').execute(message, args);
    break;

    case "ping":
      client.commands.get('ping').execute(message, args, client);
    break;

    case "setup":
      client.commands.get('setup').execute(message, args, client);
    break;
  }
});
client.login(token); 