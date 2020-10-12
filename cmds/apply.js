module.exports = {
  name: "apply",
  description: "guild applications",
  execute(message) {         
    const lucid = message.member.guild.channels.cache.get('616232331610423317');
    const tag = message.member.id;
    const nick = message.member.nickname;
    const Database = require("@replit/database")
    const db = new Database()
    const Discord = require("discord.js");
    const fetch = require("node-fetch");
    const applyembed = new Discord.MessageEmbed()
      .setThumbnail('https://cdn.discordapp.com/attachments/666097662403018766/752824828863447050/lucidsmp.png')
      .setTitle("Lucid Guild Application")
      .addField("Min. Requirements", `150 STARS & 4FKDR`)
      .addField("Start Application", `✅`, true)
      .addField("To Cancel", `❌`, true)
      .setColor(0xf1c40f)
      .setFooter(`Lucid v2.7.3 | Created by Kanabayashi#0931 & Bluq#2277`);
    const applyEmbed = message.reply({embed: applyembed}).then(msg => {
        msg.react('✅');
        msg.react('❌');
        const collector = msg.createReactionCollector(
        (reaction, user) => ['❌','✅',].includes(reaction.emoji.name) && user.id === message.author.id,
        {idle: 300000}
        )
        collector.on('collect', reaction => {

                if (reaction.emoji.name === '❌') {
                msg.delete();
                message.delete();
                }
		
                if (reaction.emoji.name === '✅') {
                msg.delete();
                message.delete();
      const question1embed = new Discord.MessageEmbed()
      .setThumbnail('https://cdn.discordapp.com/attachments/666097662403018766/752824828863447050/lucidsmp.png')
      .setTitle("What is your Age?")
      .setColor(0xf1c40f)
      .setFooter(`Lucid v2.7.3 | Created by Kanabayashi#0931 & Bluq#2277`);
      const question2embed = new Discord.MessageEmbed()
      .setThumbnail('https://cdn.discordapp.com/attachments/666097662403018766/752824828863447050/lucidsmp.png')
      .setTitle("What timezone are you?")
      .setColor(0xf1c40f)
      .setFooter(`Lucid v2.7.3 | Created by Kanabayashi#0931 & Bluq#2277`);
      const question3embed = new Discord.MessageEmbed()
      .setThumbnail('https://cdn.discordapp.com/attachments/666097662403018766/752824828863447050/lucidsmp.png')
      .setTitle("How many days a week can you play?")
      .setColor(0xf1c40f)
      .setFooter(`Lucid v2.7.3 | Created by Kanabayashi#0931 & Bluq#2277`);
      const question4embed = new Discord.MessageEmbed()
      .setThumbnail('https://cdn.discordapp.com/attachments/666097662403018766/752824828863447050/lucidsmp.png')
      .setTitle("What guild/s were you previously in?")
      .setColor(0xf1c40f)
      .setFooter(`Lucid v2.7.3 | Created by Kanabayashi#0931 & Bluq#2277`);
      const question5embed = new Discord.MessageEmbed()
      .setThumbnail('https://cdn.discordapp.com/attachments/666097662403018766/752824828863447050/lucidsmp.png')
      .setTitle("Any additional notes?")
      .setColor(0xf1c40f)
      .setFooter(`Lucid v2.7.3 | Created by Kanabayashi#0931 & Bluq#2277`);
       const question6embed = new Discord.MessageEmbed()
      .setThumbnail('https://cdn.discordapp.com/attachments/666097662403018766/752824828863447050/lucidsmp.png')
      .setTitle("Your Application Has Been Submitted!")
      .setColor(0xf1c40f)
      .setFooter(`Lucid v2.7.3 | Created by Kanabayashi#0931 & Bluq#2277`);
      const questionembed = new Discord.MessageEmbed()
      .setThumbnail('https://cdn.discordapp.com/attachments/666097662403018766/752824828863447050/lucidsmp.png')
      .setTitle("What is your IGN?")
      .setColor(0xf1c40f)
      .setFooter(`Lucid v2.7.3 | Created by Kanabayashi#0931 & Bluq#2277`);
      const mmEmbed = message.author.send({embed: questionembed}).then(msg1 => {
      const collector = new Discord.MessageCollector(msg1.channel, msg => msg.author.id === message.author.id, { idle: 300000 });
var applicant = message.author.id;

let pages = [questionembed, question1embed, question2embed, question3embed, question4embed, question5embed, question6embed]; 
let page = 1;  
collector.on('collect', message => {
if(message.author.id === applicant) {
question = message.content
page++;
if (page === 1 ){
var qst1 = question
db.set("qst1",`${qst1}`).then(() => {});
} else {
message.reply(pages[page-1]);     
}
if (page === 3){
var qst2 = question
db.set("qst2",`${qst2}`).then(() => {});
}
if (page === 4){
var qst3 = question
db.set("qst3",`${qst3}`).then(() => {});
}
if (page === 5){
var qst4 = question
db.set("qst4",`${qst4}`).then(() => {});
}
if (page === 6){
var qst5 = question
db.set("qst5",`${qst5}`).then(() => {});
}
if (page === 7){
qst6 = question
db.get("qst5").then(value5 => {
qst5 = value5
db.get("qst4").then(value4 => {
qst4 = value4
db.get("qst3").then(value3 => {
qst3 = value3
db.get("qst2").then(value2 => {
qst2 = value2
db.get("qst1").then(value1 => {
qst1 = value1
const appembed = new Discord.MessageEmbed()
      .setThumbnail('https://cdn.discordapp.com/attachments/666097662403018766/752824828863447050/lucidsmp.png')
      .setTitle(`${nick}'s Application`)
      .setColor(0xf1c40f)
      .addField("`Discord`", `<@${tag}>`)
      .addField("`What is your IGN?`", `**${qst1}**`)
      .addField("`What timezone are you?`", `**${qst2}**`)
      .addField("`What is your Age?`", `**${qst3}**`)
      .addField("`How many days a week can you play?`", `**${qst4}**`)
      .addField("`What guild/s were you previously in?`", `**${qst5}**`)
      .addField("`Any additional notes?`", `**${qst6}**`)
      .setFooter(`Lucid v2.7.3 | Created by Kanabayashi#0931 & Bluq#2277`);
      lucid.send(appembed)
      })
      })
      })
      })
      })
}
                 }
                 })
      })
}
        })
        })
  }
}


