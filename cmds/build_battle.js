module.exports = {
  name: "build_battle",
  description: "build build_battle statistics",
  execute(message, args, key) {
    const Discord = require("discord.js");
    const prefix = "!";
    const fetch = require("node-fetch");
    let fullcommand = message.content.substr(2);
    let splitcommand = fullcommand.split(" ");
    let username = splitcommand.slice(1);

const api = `https://api.mojang.com/users/profiles/minecraft/${username}`;
    fetch(api)
      .catch()
      .then(response => {
        return response.json();
      })
      .then(data => {
        const id = data.id;

        const hypixel = `https://api.hypixel.net/player?key=${key}&uuid=${id}`;
        fetch(hypixel)
          .catch()
          .then(response => {
            return response.json();
          })

          .then(player => {
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
            var dname = player["player"]["displayname"];
            var vers = (player["player"]["mcVersionRp"]);
            var version = ("On " + vers)
            if (typeof vers === "undefined") {
              var version = " ";
            }
            var coins = player["player"]["stats"]["BuildBattle"]["coins"];
            var wtn = player["player"]["stats"]["BuildBattle"]["wins_teams_normal"];
            var wsn = player["player"]["stats"]["BuildBattle"]["wins_solo_normal"];
            var wsp = player["player"]["stats"]["BuildBattle"]["wins_solo_pro"]
            var games = player["player"]["stats"]["BuildBattle"]["games_played"];
            var wins = player["player"]["stats"]["BuildBattle"]["wins"];
            var loss = (games - wins);
            var score  = player["player"]["stats"]["BuildBattle"]["score"];
            var wgtb = player["player"]["stats"]["BuildBattle"]["wins_guess_the_build"];
            if (loss == null) {var b = 1;}
            var a = wins;
            var b = loss;
            var c = a / b;
            var wlrdeci = c;
            var wlr = wlrdeci.toFixed(2);
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

            var drank = player["player"]["newPackageRank"];

            if (drank === "VIP_PLUS") {
              var rankd = drank.slice(0, -5);
              var drank = `[${rankd}+]`;
            }
            if (drank === "MVP_PLUS") {
              var rankd = drank.slice(0, -5);
              var drank = `[${rankd}+]`;
            }
            if (drank === "VIP") {
              var drank = `[VIP]`;
            }
            if (drank === "MVP") {
              var drank = `[MVP]`;
            }
            if (typeof drank === "undefined") {
              var drank = " ";
            }
            if (typeof drank === "NONE") {
              var drank = " ";
            }
            try {
              var mrank = player["player"]["monthlyPackageRank"];
              if (mrank === "SUPERSTAR") {
                var drank = `[MVP++]`;
              }
            } catch {
              return;
            }
            try {
              var mrank = player["player"]["rank"];
              if (mrank === "YOUTUBER") {
                var drank = `[Youtuber]`;
              }
            } catch {
              return;
            }
            try {
              var mrank = player["player"]["rank"];
              if (mrank === "HELPER") {
                var drank = `[Helper]`;
              }
            } catch {
              return;
            }
            try {
              var mrank = player["player"]["rank"];
              if (mrank === "MOD") {
                var drank = `[Mod]`;
              }
            } catch {
              return;
            }
            try {
              var mrank = player["player"]["rank"];
              if (mrank === "ADMIN") {
                var drank = `[Admin]`;
              }
            } catch {
              return;
            }
            try {
              var mrank = player["player"]["rank"];
              if (mrank === "OWNER") {
                var drank = `[Owner]`;
              }
            } catch {
              return;
            }
            try {
              var mrank = player["player"]["prefix"];
              if (mrank === "§3[BUILD TEAM]") {
                var drank = `[Build Team]`;
              }
            } catch {
              return;
            }
            try {
              var mrank = player["player"]["prefix"];
              if (mrank === "§d[PIG§b+++§d]") {
                var drank = `[PIG+++]`;
              }
            } catch {
              return;
            }
            try {
            function formatNumber(num) {
              var num_parts = num.toString().split(".");
              num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
              return num_parts.join(".");
            }
            var wgtb = formatNumber(wgtb);
            var wtn = formatNumber(wtn);
            var wsn = formatNumber(wsn);
            var wsp = formatNumber(wsp);
            var wins = formatNumber(wins);
            var wlr = formatNumber(wlr);
            var loss = formatNumber(loss);
            var coins = formatNumber(coins);
            var score = formatNumber(score);
            var games_played = formatNumber(games_played);
            } catch {}

            var skin = `https://visage.surgeplay.com/full/${id}?'+Math.random()'`;
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
               var footer = (`${dname}'s ${lastl} | Playing ${gamemode}! | ${version}`) 
               var footp = ("http://icons.iconarchive.com/icons/custom-icon-design/flatastic-10/512/Trafficlight-green-icon.png")
               var color = ('#00FF00')
            }
            if (lastlogin < lastlogout) {
               var lastl = ('Offline')
               var footer = (`${dname}'s ${lastl} | Last Seen In ${gamemode}! | ${version}`)
               var footp = ("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Location_dot_dark_red.svg/768px-Location_dot_dark_red.svg.png")
               var color = ('#b22121')
                }
                    const pbembed = new Discord.MessageEmbed()
                    .setColor(color)
                    .setTitle('**Build Battle**')
                    .setThumbnail('https://hypixel.net/styles/hypixel-v2/images/game-icons/BuildBattle-64.png')
                    .addField("`Player`", `[**${drank} ${dname} ${guildt}**](https://plancke.io/hypixel/player/stats/${username})`)
                    .addField("`WLR`", `**${wlr}**`, true)
                    .addField("`All Wins`", `**${wins}**`, true)
                    .addField("`All Losses`", `**${loss}**`, true)
                    .addField("`Solo Wins`", `**${wsn}**`, true)
                    .addField("`Team Wins`", `**${wtn}**`, true)
                    .addField("`Pro Wins`", `**${wsp}**`, true)
                    .addField("`Score`", `**${score}**`, true)
                    .addField("`Coins`", `**${coins}**`, true)
                    .addField("`Guild`", `[**${nnguild}**](https://plancke.io/hypixel/guild/name/${nguild})` ,true)
                    .setImage(`${skin}`, true)
                    .setTimestamp('')
                    .setFooter(footer, footp)
                    const mmEmbed = message.reply({embed: pbembed}).then(msg => {
        msg.react('📩');
        msg.react('❌');

        const collector = msg.createReactionCollector(
        (reaction, user) => ['❌','📩',].includes(reaction.emoji.name) && user.id === message.author.id,
        {idle: 300000}
        )
        collector.on('collect', reaction => {
		
                if (reaction.emoji.name === '📩') {
                reaction.users.remove(message.author.id);
                message.author.send(pbembed)
                 }
                if (reaction.emoji.name === '❌') {
                msg.delete();
                message.delete();
                }
                            })
                        })
                        })
                    })
          });
      });
  }
}