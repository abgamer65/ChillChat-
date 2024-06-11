const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'userinfo',
    aliases: ['user', 'uinfo'],
    description: 'Get information about a user',
    execute(message, args) {
        // Check if a user was mentioned in the command, or use the message author as the default user
        const user = message.mentions.users.first() || message.author;

        // Create an embed object
        const embed = new EmbedBuilder()
        .setColor('#FFFFFF')
        .setAuthor({
        name: 'User Info!',
        iconURL: 'https://media.discordapp.net/attachments/1165539147881132142/1166348715850735616/6dbd7d91d3fc153376a97682697bb14e107c5f337a992b0ee0c6456f137bf015.gif?ex=6668e823&is=666796a3&hm=36c0f4bca0045c201025858fb1dac71be849ed8b7d478f8c7dfde344173d33bd&', 
        url: 'https://discord.gg/RfQ27TH3'
    })
        .setThumbnail(user.avatarURL({ format: 'png', dynamic: true, size: 1024 }))
        .setDescription(`**Username**:  ${user.username}\n**Discriminator**:  ${user.discriminator}\n**ID**:  ${user.id}\n**Joined Discord**:  ${user.createdAt.toUTCString()}`)
        .setTimestamp();

        message.reply({ embeds: [embed] });
    },
};


/*

   MADE BY RTX!! FEEL FREE TO USE ANY PART OF CODE

  ██████╗░████████╗██╗░░██╗           
  ██╔══██╗╚══██╔══╝╚██╗██╔╝          
  ██████╔╝░░░██║░░░░╚███╔╝░          
  ██╔══██╗░░░██║░░░░██╔██╗░          
  ██║░░██║░░░██║░░░██╔╝╚██╗          
  ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝          

   FOR EMOJIS EITHER YOU CAN EDIT OR JOIN OUR DISCORD SERVER 
   SO WE ADD BOT TO OUR SERVER SO YOU GET ANIMATED EMOJIS.

   DISCORD SERVER : https://discord.gg/RfQ27TH3
   YOUTUBE : https://www.youtube.com/@juttgangstergaming4261

   FOR HELP CONTACT ME ON DISCORD
   ## Contact    [ DISCORD SERVER :  https://discord.gg/RfQ27TH3 ]
*/
