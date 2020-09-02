module.exports = {
	name: 'delete',
	description: 'Delete',
    execute(message, args, client) {
        let id = 437249534096048130;
        if (message.author.id == id){
            if (!args.length) return message.reply("você não falou o ID do chat!")
            if (isNaN(args)) return message.reply(`isso não é um número!`);
            client.channels.fetch(args)
                .then(channel => channel.delete());
        }else {
            return message.channel.send(`Você não tem permissão para executar este comando ${message.author}!`);
        }
	},
};