module.exports = {
    name: 'send',
    description: 'Send',
    execute(message, args) {
        let id = 437249534096048130;
        if (message.author.id == id){    
        let msg = args.join(" ");
        if (!args.length) {
            return message.channel.send(`Você não falou os argumentos ${message.author}!`);
        }else {
            message.channel.send(`${msg}`);
        }
        }else {
            return message.channel.send(`Você não tem permissão para executar este comando ${message.author}!`);
    }   
  }
}