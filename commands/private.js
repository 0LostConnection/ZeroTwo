module.exports = {
    name: 'private',
    description: 'Private',
    execute(message, args) {
        let id = 437249534096048130;
        if (message.author.id == id) {

            if (!args[0]) return message.reply('you need to provide a role')
            if (!args[1]) return message.reply('you need to provide a message')
            const role = message.mentions.roles.first()
            let msg = args.slice(1).join(" ");
            //let msg = args.slice(args[0]); 
            message.guild.roles.cache.get(role.id).members.forEach(member => member.send(msg))
            
        }else {
            return message.channel.send(`Você não tem permissão para executar este comando, ${message.author}!`);
    }   
  }
}