const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const fs = require('fs');
const { Collection } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('wel')
    .setDescription('Says hello if you are authorized.')
    .addStringOption(option =>
      option.setName('name')
        .setDescription('Your name')
        .setRequired(true)
    ),

  async execute(interaction) {
    const user = interaction.options.getString('name');
    const dataFile = fs.readFileSync('./data.json');
    const data = JSON.parse(dataFile);

    const userData = data.users.find(userObj => userObj.id === interaction.user.id);

    if (!userData) {
      return interaction.reply('Sorry, you are not authorized to use this command.');
    }

    const cooldownDataFile = fs.readFileSync('./cool1.json', {encoding: 'utf8', flag: 'a+'});

    let cooldowns;
    if (cooldownDataFile) {
      cooldowns = new Collection(JSON.parse(cooldownDataFile));
    } else {
      cooldowns = new Collection();
    }

    const cooldownName = 'wel';
    const now = Date.now();
    const cooldownEnd = cooldowns.get(`${interaction.user.id}-${cooldownName}`);

    if (cooldownEnd && cooldownEnd > now) {
      const timeLeft = Math.ceil((cooldownEnd - now) / (60 * 1000));
      const embed = new MessageEmbed()
        .setColor('#ff0000')
        .setDescription(`You can use this command again in ${timeLeft} minute(s).`);
      return interaction.reply({ embeds: [embed], ephemeral: true });
    } else {
      cooldowns.set(`${interaction.user.id}-${cooldownName}`, now + 60 * 60 * 1000); 
      fs.writeFileSync('./cool1.json', JSON.stringify(Array.from(cooldowns.entries())));
    }
  }
};  