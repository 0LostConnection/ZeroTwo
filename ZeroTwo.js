const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

client.commads = new Discord.Collection();

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log(`Logado como ${client.user.tag}!\nZeroTwo.js Version 1.1.1\n`);
  });

client.on('message', message => {
  const args = message.content.slice(prefix.length).split(/ +/g);
  const command = args.shift().toLowerCase();

  if (!client.commands.has(command)) return

  if (!message.content.startsWith(prefix) || message.author.bot) return;
  try {
    client.commands.get(command).execute(message, args, client);
  } catch (error) {
      console.error(error);
      message.reply(`Ocorreu um erro ao executar este comando.`);
  }
});

client.login(token);
