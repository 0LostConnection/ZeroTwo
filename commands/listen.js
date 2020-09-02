module.exports = {
    name: 'listen',
    description: 'Listen',
    execute(message, args, client) {
        let msg = args.join(" ");
        let id = 437249534096048130
        if (message.author.id == id) {
            if (!args.length) {
                return client.user.setActivity(null)
                
            }else {
                client.user.setActivity(msg, { type: "LISTENING" });
                const embed = {
                    "description": `**"Ouvindo"** agora é: ${msg}`,
                    "color": 14331817,
                  };
                  message.channel.send({ embed })
            }
        }else {
            message.channel.send(`Você não tem permissão para executar este comando, ${message.author}!`);
        }
    }
}