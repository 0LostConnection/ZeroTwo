module.exports = { 
    name: 'avatar',
    description: 'avatar',
    execute(message) {
        const user = message.mentions.users.first() || message.author;
        const embed = {
            "description": `**Você pode baixar a imagem clicando [aqui](${user.avatarURL({format: "png"})})**`,
            "color": 14331817,
            "image": {
              "url": user.avatarURL()
            },
            "author": {
              "name": user.username,
              "url": user.avatarURL(),
              "icon_url": user.avatarURL()
            }
          };
          message.channel.send(`${message.author}`, { embed });
    }
}