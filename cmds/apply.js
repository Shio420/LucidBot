module.exports = {
  name: "apply",
  description: "guild applications",
  execute(message, key) {         
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
      .setTitle("What timezone are you?")
      .setColor(0xf1c40f)
      .setFooter(`Lucid v2.7.3 | Created by Kanabayashi#0931 & Bluq#2277`);
      const question2embed = new Discord.MessageEmbed()
      .setThumbnail('https://cdn.discordapp.com/attachments/666097662403018766/752824828863447050/lucidsmp.png')
      .setTitle("What is your Age?")
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
message.reply(pages[page-1]); 
if (page === 2 ){
var qst1 = question
db.set("qst1",`${qst1}`).then(() => {});
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
      .setTitle(`${nick}'s Application`)
      .setColor(0xf1c40f)
      .addField("`Discord`", `<@${tag}>`)
      .addField("`What is your IGN?`", `**${qst1}**`)
      .addField("`What timezone are you?`", `**${qst2}**`)
      .addField("`What is your Age?`", `**${qst3}**`)
      .addField("`How many days a week can you play?`", `**${qst4}**`)
      .addField("`What guild/s were you previously in?`", `**${qst5}**`)
      .addField("`Any additional notes?`", `**${qst6}**`)
lucid.send(appembed)
const api = `https://api.mojang.com/users/profiles/minecraft/${qst1}`;
    fetch(api)
      .catch()
      .then(response => {
        return response.json()
      })
      .then(data => {
        const id = data.id;
        const hypixel = `https://api.hypixel.net/player?key=${key}&uuid=${id}`;
        fetch(hypixel)
          .catch()
          .then(response => {
            return response.json()
          })
          .then(player => {
            if (player["player"]["displayname"] === "undefined") {
              lucid.send(`${qst1} has never joined Hypixel.`);
            }
            var joindate = player["player"]["firstLogin"];
            var months_arr = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
            var date = new Date(joindate);
            var year = date.getFullYear();
            var month = months_arr[date.getMonth()];
            var day = date.getDate();
            var convdataTime = month + "/" + day + "/" + year + ``;
            var lastlogout2 = player["player"]["lastLogout"];
            var ldate = new Date(lastlogout2);
            var lyear = ldate.getFullYear();
            var lmonth = months_arr[ldate.getMonth()];
            var lday = ldate.getDate();
            var lastlogout2 = lmonth + "/" + lday + "/" + lyear + ``;
            var language = player["player"]["userLanguage"];
            if (typeof language === "undefined") {
              var language = "ENGLISH";
            }
            var friend = player["player"]["friends"];
            var network = player["player"]["networkLevel"];
            var achievement = player["player"]["achievementPoints"];
            var dname = player["player"]["displayname"];
            var star = player["player"]["achievements"]["bedwars_level"];;
            var vers = (player["player"]["mcVersionRp"]);
            var version = ("On " + vers)
            if (typeof vers === "undefined") {
              var version = " ";
            }
            //all modes stats
            var fdeath =
              player["player"]["stats"]["Bedwars"]["final_deaths_bedwars"];
            if (fdeath == null) {
              var fdeath = "0";
            }
            var fkill =
              player["player"]["stats"]["Bedwars"]["final_kills_bedwars"];
            var x = fkill;
            var y = fdeath;
            if (y == 0) {
              var y = 1;
            }
            var z = x / y;
            var fkdrdeci = z;
            var fkdr = fkdrdeci.toFixed(2);
            var loss = player["player"]["stats"]["Bedwars"]["losses_bedwars"];
            var wins = player["player"]["stats"]["Bedwars"]["wins_bedwars"];
            var a = wins;
            var b = loss;
            if (loss == null) {
              var b = 1;
            }
            var c = a / b;
            var wlrdeci = c;
            var wlr = wlrdeci.toFixed(2);
            var vers = (player["player"]["mcVersionRp"]);
            var version = ("On " + vers)
            if (typeof vers === "undefined") {
              var version = " ";
            }
            var gamemode = player["player"]["mostRecentGameType"];
            if (typeof gamemode === "undefined") {
              var gamemode = "Limbo";
            }
            var lastlogin = player["player"]["lastLogin"];
            var lastlogout = player["player"]["lastLogout"];
            var vtime = new Date(lastlogout);
            var ts = new Date();

            var h = lastlogout; 
            var i = lastlogin;
            var j = h - i;
            var lastl = j;
            var j = lastl;
            let d2args = player["player"]["newPackageRank"];
  	switch (d2args) {
		case "VIP":
   			var drank = "[VIP]"
    		break;
		case "VIP_PLUS":
   			var drank = "[VIP+]"
    		break;
		case "MVP":
   			var drank = "[MVP]"
    		break;	
		case "MVP_PLUS":
   			var drank = "[MVP+]"		
	}
	let dargs = player["player"]["rank"];
  	switch (dargs) {
		case "YOUTUBE":
   			var drank = "[Youtube]"
    		break;
		case "HELPER":
   			var drank = "[Helper]"
    		break;
		case "MOD":
   			var drank = "[Mod]"
    		break;	
		case "ADMIN":
   			var drank = "[Admin]"
    		break;	
		case "OWNER":
   			var drank = "[Owner]"
    		break;	
		case "NONE":
   			var drank = " "
    		break;		
	}
        let pref = player["player"]["prefix"];
  	switch (pref) {
		case "§3[BUILD TEAM]":
   			var drank = "[Build Team]"
    		break;
		case "§d[PIG§b+++§d]":
   			var drank = "[PIG+++]"
    		break;			
	}
        let mpack = player["player"]["monthlyPackageRank"];
  	switch (mpack) {
		case "SUPERSTAR":
   			var drank = "[MVP++]"
    		break;		
	}
        try {
            function formatNumber(num) {
              var num_parts = num.toString().split(".");
              num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
              return num_parts.join(".");
            }
            var loss = formatNumber(loss);
            var fkill = formatNumber(fkill);
            var fkdr = formatNumber(fkdr);
            var wins = formatNumber(wins);
            var star = formatNumber(star);
            var network = formatNunmber(network)
            } catch {}
           var guildname = `https://api.hypixel.net/findGuild?key=${key}&byUuid=${id}`;
              fetch(guildname)
                .then(response => {
                  return response.json();
                })
                .then(guild => {
                  var guildn = guild["guild"];

                  var guildstats = `https://api.hypixel.net/guild?key=${key}&id=${guildn}`;
                  fetch(guildstats)
                    .then(response => {
                      return response.json();
                    })
                    .then(guilds => {
                      try {
                        var nnguild = guilds["guild"]["name"];
                        var nguild = nnguild.replace(/ /g,"%20");
                      } catch {
                        var nnguild = "None";
                      }
                      try { var guildt = "[" + guilds['guild']['tag'] + "] " } catch {var guildt = " "}
            if (lastlogin > lastlogout) {
               var lastl = ('Online')
               var footer = (`Lucid v2.7.3 | ${dname}'s ${lastl} | Playing ${gamemode}! | ${version}`) 
               var footp = ("http://icons.iconarchive.com/icons/custom-icon-design/flatastic-10/512/Trafficlight-green-icon.png")
               var color = ('#00FF00')
            }
            if (lastlogin < lastlogout) {
               var lastl = ('Offline')
               var footer = (`Lucid v2.7.3 | ${dname}'s ${lastl} | Last Seen In ${gamemode}! | ${version}`)
               var footp = ("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Location_dot_dark_red.svg/768px-Location_dot_dark_red.svg.png")
               var color = ('#b22121')
                }
                    const pbembed = new Discord.MessageEmbed()
                        .setColor(color)
                        .setTitle(`${nick}'s Application`)
                        .addField("`Star`", `**${star}☆**` ,true)
                        .addField("`FKDR`", `**${fkdr}**`, true)
                        .addField("`WLR`", `**${wlr}**`, true)
                        .addField("`Finals`", `**${fkill}**`, true)
                        .addField("`Wins`", `**${wins}**`, true)
                        .addField("`Loss`", `**${loss}**`, true)
                        .setTimestamp('')
                        .setFooter(footer, footp)
                    const mmEmbed = lucid.send({embed: pbembed}).then(msg => {
        msg.react('✅');;
        msg.react('❌');

        const collector = msg.createReactionCollector(
        (reaction, user) => ['❌'].includes(reaction.emoji.name) && user.id === message.author.id,
        {idle: 300000}
        )
        collector.on('collect', reaction => {
		
                if (reaction.emoji.name === '❌') {
                msg.delete();
                message.delete();
                }
                            })

                    })
                        })
                        })
                    })
          });
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


