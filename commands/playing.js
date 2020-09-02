module.exports = {
    name: 'play',
    description: 'Playing',
    execute(message, args, client) {
        let id = 437249534096048130
        let msg = args.join(" ");
        //let id = 614870175396659201
            if (message.author.id == id) {
                if (!args.length) {
                    return client.user.setActivity(null); 
                }else {
                    client.user.setActivity(msg); 
                    const embed = {
                        "description": `**"Jogando"** agora é: ${msg}`,
                        "color": 14331817,
                      };
                      message.channel.send({ embed })
                }        

            }else {
                message.channel.send(`Você não tem permissão para executar este comando, ${message.author}!`);
            }
    }
}