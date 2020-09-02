module.exports = {
    name: 'stream',
    description: 'Stream',
    execute(message, args, client) {
        let msg = args.join(" ");
        let id = 437249534096048130
        if (message.author.id == id) {
            if (!args.length) {
                return client.user.setActivity(null)
                
            }else {
                client.user.setActivity(msg, { type: "STREAMING", url: "https://www.twitch.tv/0Lostconnection" });
                const embed = {
                    "description": `**"Transmitindo"** agora é: ${msg}`,
                    "color": 5846677,
                  };
                  message.channel.send({ embed })
            }
        }else {
            message.channel.send(`Você não tem permissão para executar este comando, ${message.author}!`);
        }
    }
}