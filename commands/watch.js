module.exports = {
    name: 'watch',
    description: 'Watch',
    execute(message, args, client) {
        let msg = args.join(" ");
        let id = 437249534096048130
        if (message.author.id == id) {
          if (!args.length) {
            return client.user.setActivity(null)
          }else {
            client.user.setActivity(msg, { type: 'WATCHING'})
            const embed = {
            "description": `**"Assistindo"** agora é: ${msg}`,
            "color": 14331817,
            };
             message.channel.send({ embed })
          }
        }else {
          message.channel.send(`Você não tem permissão para executar este comando, ${message.author}!`);
    }
 }
}