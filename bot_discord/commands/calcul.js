module.exports = {
  name : 'calcul',
  description: 'calculatrice',
  execute(client, message, args){
    message.channel.send('Quelle opération voulez-vous faire ?');
    
  }
} 


const a = 12;
const b = 3;


const add = a+b;

const sus = a-b;

const mult = a*b;

const div = a/b;

console.log(add, sus, mult, div)