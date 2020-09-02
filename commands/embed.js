module.exports = {
    name: 'embed',
    description: 'Embed',
    execute(message, args) {
        let msg = args.join(" ");
        let id = 437249534096048130;
        if (message.author.id == id) {
          if (!args.length) {
            return message.channel.send(`Você não falou os argumentos, ${message.author}!`);
        }else {
        const embed = {
            "description": `${msg}`,
            "color": 14331817,
          };
          message.channel.send({ embed });
        }
        }else {
          message.channel.send(`Você não tem permissão para executar este comando, ${message.author}!`);
        }
    }
}