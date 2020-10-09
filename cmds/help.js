module.exports = {
  name: "help",
  description: "help",
  execute(message, args) {
    
    const Discord = require("discord.js");
    const { token } = "NjY1NjYwNTM3NDU5MTc5NTcz.Xho2rw.k8li5PF_xr9zHQ0wRDjqKAVellw";
    const prefix = "!";
    const fetch = require("node-fetch");
    const key = "62f57a9d-9f77-40b3-a3ce-9bb9e326af85";
    const helpmessage = new Discord.MessageEmbed()
        .setColor(0xf1c40f)
        .setTitle("**Command List**")
        .setThumbnail('https://cdn.discordapp.com/attachments/666097662403018766/752824828863447050/lucidsmp.png')
        .addField("`!bw {IGN}`", `Bedwars Stats`, true)
        .addField("`!sw {IGN}`", `Skywars Stats`, true)
        .addField("`!mm {IGN}`", `Murder Mystery Stats`, true)
        .addField("`!mw {IGN}`", `Mega Walls Stats`, true)
        .addField("`!bb {IGN}`", `Build Battle Stats`, true)
        .addField("`!qc {IGN}`", `Quakecraft Stats`, true)
        .addField("`!sh {IGN}`", `Smash Heros Stats`, true)
        .addField("`!pb {IGN}`", `Paintball Stats`, true)
        .addField("`!pit {IGN}`", `The Pit Stats`, true)
        .addField("`!cvc {IGN}`", `Cops Vs Crim Stats`, true)
        .addField("`!duels {IGN}`", ` Duels Stats`, true)
        .addField("`!walls {IGN}`", ` The Walls Stats`, true)
        .addField("`!profile {IGN}`", ` Player Profile`, true)
        .addField("`!v {IGN}`", `Updates Bedwars Roles`, true)
        .addField("`!ping`", ` Ping & Uptime`, true)
        .addField("`!setup`", ` Creates bot roles (Owner Only)`, true)
        .addField("`Help Server`", `[**Lucid Guild**](https://discord.gg/kmqdwxG)`,true)
        .addField("`Help Video`", `[**Tutorial**](https://youtu.be/KhvPiKWZ6G0)`,true)
        .setFooter(`Lucid v2.5.3 | Created by Kanabayashi#0931 & Bluq#2277`)
        //message.author.send(helpmessage)
 const helpEmbed = message.reply({embed: helpmessage}).then(help => {
help.react('📩');
help.react('❌');

const collector = help.createReactionCollector(
(reaction, user) => ['❌','📩',].includes(reaction.emoji.name) && user.id === message.author.id,
{idle: 300000}
)
collector.on('collect', reaction => {
		
        if (reaction.emoji.name === '📩') {
                reaction.users.remove(message.author.id);
                message.author.send(helpmessage)
                 }
        if (reaction.emoji.name === '❌') {
                help.delete();
                message.delete();
                 }
                    }) 

        })
  }

}