const {MessageEmbed, MessageAttachment} = require("discord.js");
const diceImg = new MessageAttachment('./assets/img/aldecinq.jpg');
const randomDice = () => Math.floor(Math.random()*6)+1;

module.exports = {
  name : 'dice',
  description: 'Renvoie la valeur de plusieurs dés',
  execute(client, message, args){
    const embed = new MessageEmbed()
    .setColor("#d54e12")
    .setTitle("Lancer de dé")
    .attachFiles(diceImg)
    .setThumbnail('attachment://aldecinq.jpg')
    .addFields(
      { name: 'premier dé', value: randomDice(), inline: true},
      {name: 'dé 2', value: randomDice(), inline: true},
      {name: 'dé trois, pas la ville aux USA', value: randomDice(), inline: true}
    )
    .addFields(
      { name: 'dé quatres, le philosophe', value: randomDice(), inline: true},
      {name: 'dé 5', value: randomDice(), inline: true},
      {name: 'dé 6', value: randomDice(), inline: true}
    )
    
    .setTimestamp()
    .setFooter("lancé de dé");

    message.channel.send(embed);
  }
}