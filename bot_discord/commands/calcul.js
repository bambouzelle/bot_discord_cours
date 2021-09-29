module.exports = {
  name : 'calcul',
  description: 'calculatrice',
  execute(client, message, args){
    message.channel.send('Quelle opération type d opération voulez-vous faire ?');
    if (get.channel.message() === "add") {
      message.channel.send('premier chiffre:');
      a = get.channel.message();
      message.channel.send('second chiffre:');
      b = get.channel.message();
      message.channel.send(a+b);
    }
    if (get.channel.message() === "sub"){
      message.channel.send('premier chiffre:');
      a = get.channel.message();
      message.channel.send('second chiffre:');
      b = get.channel.message();
      message.channel.send(a-b);
    }
    if (get.channel.message() === "mult") {
      message.channel.send('premier chiffre:');
      a = get.channel.message();
      message.channel.send('second chiffre:');
      b = get.channel.message();
      message.channel.send(a*b);
    }
    if (get.channel.message() === "div") {
      message.channel.send('premier chiffre:');
      a = get.channel.message();
      message.channel.send('second chiffre:');
      b = get.channel.message();
      message.channel.send(a/b); 

    }
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