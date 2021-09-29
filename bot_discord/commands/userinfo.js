module.exports = {
  name : 'userinfo',
  description: 'envoie les infos d\' un utilisateur mentionné',
  execute(client, message, args){
      const user_mention = message.mentions.users.first();
      message.channel.send(`voici le tag du génie qui a été mentionné : ${user_mention.tag}`);
    
  }
}