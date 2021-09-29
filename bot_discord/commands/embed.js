const {MessageEmbed} = require("discord.js");

module.exports = {
  name : 'embed',
  description: 'envoie un embed',
  execute(client, message, args){
    const embed = new MessageEmbed()
    .setColor("#dc143c")
    .setTitle("La belle bête")
    .setURL("https://google.com")
    .setDescription("ça me fais bander")
    .setThumbnail(client.user.displayAvatarURL())
    .addField("Je suis un champ", "je suis la valeur")
    .addFields(
      { name: 'J\'ajoute des champs', value:'je suis donc jo wilField Tsonga', inline: true},
      {name: 'j\ai aucune foutu idée de ce à quoi ça va ressembler', value:'on verra', inline: true}
    )
    .setImage(client.user.displayAvatarURL())
    .setTimestamp()
    .setFooter("askip c'est le pied");

    message.channel.send(embed);
  }
}