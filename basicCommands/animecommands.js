const { EmbedBuilder } = require('discord.js');
const db = require("../mongodb");
module.exports = {
  name: 'animecommands',
  description: 'Display a list of available anime-related commands!',
  execute(message, args) {
    const embed = new EmbedBuilder()
      .setColor('#FFFFFF')
      .setTitle('Anime Commands')
      .setDescription(`__**✅ List Of Availabe Interations**__\n\n▶️ __**Section 1 :**__\n  blush, cuddle, dance, slap, bonk, bully, hug, confused, kiss, pat, happy, smile.\n\n▶️ __**Section 2 :**__\n yes, highfive, wink, wave, thinking, sad, cry, stare, bored, scream, nervous, kill.\n`)
      
      .setImage(`https://media.discordapp.net/attachments/1165539147881132142/1166348715850735616/6dbd7d91d3fc153376a97682697bb14e107c5f337a992b0ee0c6456f137bf015.gif?ex=6668e823&is=666796a3&hm=36c0f4bca0045c201025858fb1dac71be849ed8b7d478f8c7dfde344173d33bd&`);
    message.reply({ embeds: [embed] });
  },
};
