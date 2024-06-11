const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'owner',
    description: 'Bot owner info',
    execute(message, args) {
        const youtubeLink = 'https://youtube.com/@juttgangstergaming4261?si=Z0LbrQmGIgrxQbNX';
        const InstagramLink = 'https://www.instagram.com/dj_abdullah_guy/';
        const embed = new EmbedBuilder()
            .setColor('#FFFFFF')
            .setTitle(' 🫅 Owner Info')
            .setDescription(`__**About me**__:\n 🤖 Myself Shiva aka HuzaifaYT. I am a discord bot developer and web developer. I love playing games, watching anime and building different webserver applications. You will get faster replies on instagram than other social media. Feel free to contact me!\n ❤️ [HuzaifaYT](${youtubeLink})\n 💙 [HuzaifaYTT](${InstagramLink})`)
            .setTimestamp();


        message.reply({ embeds: [embed] });
    },
};

