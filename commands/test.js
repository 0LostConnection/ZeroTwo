module.exports = {
	name: 'test',
	description: 'Test',
	execute(message) {
        console.log(`${message.author.avatarURL()}`)
        const embed = {
            "title": "title ~~(did you know you can have markdown here too?)~~",
            "description": "this supports [named links](https://discordapp.com) on top of the previously shown subset of markdown. ```\nyes, even code blocks```",
            "url": "https://discordapp.com",
            "color": 15750988,
            "timestamp": "2020-07-17T14:03:06.882Z",
            "footer": {
              "icon_url": message.author.avatarURL(),
              "text": "footer text"
            },
            "thumbnail": {
              "url": "https://cdn.discordapp.com/embed/avatars/0.png"
            },
            "image": {
              "url": "https://cdn.discordapp.com/embed/avatars/0.png"
            },
            "author": {
              "name": "author name",
              "url": "https://discordapp.com",
              "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
            },
            "fields": [
              {
                "name": "🤔",
                "value": "some of these properties have certain limits..."
              },
              {
                "name": "😱",
                "value": "try exceeding some of them!"
              },
              {
                "name": "🙄",
                "value": "an informative error should show up, and this view will remain as-is until all issues are fixed"
              },
              {
                "name": "<:thonkang:219069250692841473>",
                "value": "these last two",
                "inline": true
              },
              {
                "name": "<:thonkang:219069250692841473>",
                "value": "are inline fields",
                "inline": true
              }
            ]
          };
          if (message.author.id === id) {
            message.channel.send("this `supports` __a__ **subset** *of* ~~markdown~~ 😃 ```js\nfunction foo(bar) {\n  console.log(bar);\n}\n\nfoo(1);```", { embed });
          }else {
            return message.channel.send(`Você não tem permissão para executar este comando, ${message.author}!`);
          }
	},
};