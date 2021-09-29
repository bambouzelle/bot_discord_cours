const Discord = require('discord.js');

module.exports = {
  name : 'calcul',
  description: 'calculatrice',
  execute(client, message, args, get){
    message.channel.send('Quelle opération type d opération voulez-vous faire ?');
    if (String.prototype.startsWith() === 'ad') {
      get.message.channel.send('premier chiffre:');
      a = String.prototype.startsWith();
      message.channel.send('second chiffre:');
      b = String.prototype.startsWith();
      message.channel.send(a+b);
    }
    /*if (message.content() === "sub"){
      message.channel.send.args('premier chiffre:');
      a = message.content.args();
      message.channel.send('second chiffre:');
      b = message.content.args();
      message.channel.send(a-b);
    }
    if (message.content.args() === "mult") {
      message.channel.send.args('premier chiffre:');
      a = message.content.args();
      message.channel.send('second chiffre:');
      b = message.content.args();
      message.channel.send(a*b);
    }
    if (message.content.args() === "div") {
      message.channel.send('premier chiffre:');
      a = message.content.args();
      message.channel.send('second chiffre:');
      b = message.content.args();
      message.channel.send(a/b); 

    } */
  }
} 

let c = 0;
let a = 0;
let b = 0;


const add = a+b;

const sus = a-b;

const mult = a*b;

const div = a/b;

console.log(add, sus, mult, div)