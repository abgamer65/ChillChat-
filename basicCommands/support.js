const { EmbedBuilder } = require('discord.js');
const db = require("../mongodb");
module.exports = {
    name: 'support',
    description: 'support server of this Bot',
    execute(message, args) {
        const supportServerLink = "https://discord.gg/RfQ27TH3";
      const githubLink = "https://github.com/";
      const replitLink = "https://replit.com/@GlaceYT";
      const youtubeLink = "https://youtube.com/@juttgangstergaming4261?si=Z0LbrQmGIgrxQbNX";
        const embed = new EmbedBuilder()
            .setColor('#b300ff')
            .setAuthor({
              name: 'Support Server',
              iconURL: 'https://media.discordapp.net/attachments/1165539147881132142/1166348715850735616/6dbd7d91d3fc153376a97682697bb14e107c5f337a992b0ee0c6456f137bf015.gif?ex=6668e823&is=666796a3&hm=36c0f4bca0045c201025858fb1dac71be849ed8b7d478f8c7dfde344173d33bd&', 
              url: 'https://discord.gg/xQF9f9yUEM'
          })
            .setDescription(`➡️ **Join our Discord server for support and updates:**\n- Discord - ${supportServerLink}\n\n➡️ **Follow us on:**\n- GitHub - ${githubLink}\n- Replit - ${replitLink}\n- YouTube - ${youtubeLink}`)
            .setImage('https://media.discordapp.net/attachments/1165539147881132142/1166348715850735616/6dbd7d91d3fc153376a97682697bb14e107c5f337a992b0ee0c6456f137bf015.gif?ex=6668e823&is=666796a3&hm=36c0f4bca0045c201025858fb1dac71be849ed8b7d478f8c7dfde344173d33bd&')
            .setTimestamp();

        message.reply({ embeds: [embed] });
    },
};


/*

  ________.__                        _____.___.___________
 /  _____/|  | _____    ____  ____   \__  |   |\__    ___/
/   \  ___|  | \__  \ _/ ___\/ __ \   /   |   |  |    |   
\    \_\  \  |__/ __ \\  \__\  ___/   \____   |  |    |   
 \______  /____(____  /\___  >___  >  / ______|  |____|   
        \/          \/     \/    \/   \/                  

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ## Created by HuzaifaYT!                                              ║
║  ## Feel free to utilize any portion of the code                       ║
║  ## DISCORD :  https://discord.gg/RfQ27TH3                             ║
║  ## YouTube : https://discord.gg/RfQ27TH3                              ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/
