const avatar = require("./avatar");

module.exports = {
	name: 'zerotwo',
	description: 'ZeroTwo',
	execute(message) {
    const user = message.author;
        const embed = {
            "title": "ZeroTwo.js informations",
            "color": 12465051,
            "footer": {
              "text": "ZeroTwo.js"
            },
            "author": {
              "name": user.username,
              "icon_url": user.avatarURL()
            },
            "fields": [
              {
                "name": "Version",
                "value": "1.1.1",
                "inline": true
              },
              {
                "name": "Creator",
                "value": "[LostConnection](https://twitter.com/0lostconnection)",
                "inline": true
              }
            ]
          };
          message.channel.send({ embed });
	},
};