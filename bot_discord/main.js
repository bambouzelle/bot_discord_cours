const fs = require("fs");
const Discord = require('discord.js');
const {TOKEN, PREFIX} =require('./config');

const { Client, Collection } = require('discord.js');

const client = new Discord.Client();
client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));


for (const file of commandFiles) {
  const command =require(`./commands/${file}`);
  client.commands.set(command.name, command);
  console.log(`Commande chargée : ${command.name}`);

}


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if (!message.content.startsWith(PREFIX) || message.author.bot) return;
  const args =message.content.slice(PREFIX.length).split(/ +/);
  const command = args.shift().toLowerCase();
  if (!client.commands.has(command)) return;
  client.commands.get(command).execute(client, message, args);
  
  
});
  
client.login(TOKEN);
