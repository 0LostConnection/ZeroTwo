module.exports = { 
    name: 'registro',
    description: 'registro',
    execute(message) {
        //console.log(message.guild.iconURL())
        let embed1 = {
            "title": "Registro",
            "description": "Clique para reagir no emoji em que corresponde sua escolha durante o registro.\nPodem ser feitas alterações a qualquer momento.",
            "color": 14331817,
            "author": {
                    "name": "Reconnected",
                    "icon_url": "https://i.imgur.com/FMrIS0l.png"
            },
            "footer": {
              "icon_url": "https://i.imgur.com/nNj5FC4.png",
              "text": "Administração"
            }
          };
        let embed2 = {
            "title": "Você é:",
            "description": "**Homem** 🚹\n**Mulher** 🚺\n**Sem Gênero** 🚻",
             "color": 14331817
          };
        let embed3 = {
            "title": "Vocé é:",
            "description": "**Hétero** 💑\n**LGBTQ+** 🌈",
             "color": 14331817
        };
        let embed4 = {
            "title": "Vocé tem:",
            "description": "**+18** 💯\n**-18** 🔞 ",
            "color": 14331817
        };
        let embed5 = {
            "title": "Vocé está:",
            "description": "**Em um relacionamento** 👥\n**Solteiro(a)** 👤",
            "color": 14331817
        };
        if (message.author.id == id) {
          message.channel.send({ embed: embed1 });
          message.channel.send({ embed: embed2 });
          message.channel.send({ embed: embed3 });
          message.channel.send({ embed: embed4 });
          message.channel.send({ embed: embed5 });
        }else {
          return message.channel.send(`Você não tem permissão para executar este comando, ${message.author}!`);
        }
    }
}