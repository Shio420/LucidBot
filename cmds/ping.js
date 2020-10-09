module.exports = {
  name: "ping",
  description: "Ping The Bot - Bot Statistics",
  cooldown: 5,
  execute(message, args, client) {
    const Discord = require("discord.js");
    const prefix = "!";
    const fetch = require("node-fetch");

    let totalSeconds = client.uptime / 1000;
    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let second = totalSeconds % 60;
    let seconds = second.toFixed(0);
    var uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;

    //var uptime = (`${days}d ${hours}h ${minutes}m ${seconds}s`)
    var latency = Math.floor(Date.now() - message.createdTimestamp) + "ms";
    const ping = new Discord.MessageEmbed()
      .setThumbnail('https://cdn.discordapp.com/attachments/666097662403018766/752824828863447050/lucidsmp.png')
      .setTitle(":satellite:  Ping Complete")
      .addField(`Latency:`, `${latency}`)
      .addField(`Uptime:`, `${uptime}`)
      .addField("`Invite`", `[**Lucid Bot**](https://discord.com/oauth2/authorize?client_id=665660537459179573&scope=bot&permissions=0)`)
      .setColor(0xf1c40f)
      .setFooter(`Lucid v2.5.3 | Created by Kanabayashi#0931 & Bluq#2277`);
    const pingEmbed = message.reply({embed: ping}).then(msg => {
        msg.react('📩');
        msg.react('❌');

        const collector = msg.createReactionCollector(
        (reaction, user) => ['❌','📩',].includes(reaction.emoji.name) && user.id === message.author.id,
        {idle: 300000}
        )
        collector.on('collect', reaction => {
		
                if (reaction.emoji.name === '📩') {
                reaction.users.remove(message.author.id);
                message.author.send(ping)
                 }
                if (reaction.emoji.name === '❌') {
                msg.delete();
                message.delete();
                 }
        })
        })
  }
};
