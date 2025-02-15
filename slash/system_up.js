const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const fs = require('fs');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('namayesh_par')
    .setDescription('نمایش اطلاعات پرورشگاه'),
  async execute(interaction) {
    const user = interaction.user;

    // خواندن پایگاه داده از فایل 'data.json'
    let rawData = fs.readFileSync('./data.json');
    let database = JSON.parse(rawData);

    // پیدا کردن کاربر در پایگاه داده
    const userObject = database.users.find(userObj => userObj.id === user.id);

    if (userObject) {
      const cpu = userObject.boz;
      const ram = userObject.kaw;
      const disk = userObject.shotor_morg;
      const graphic = userObject.morg;
      const embed = new MessageEmbed()
        .setColor('#00FF7F')
        .setDescription(`\n**__مشخصات پرورشگاه شما :__**\n\n**گاو :** : ${ram} \n\n**بز** : ${cpu} \n\n**شترمرغ** : ${disk} \n\n**مرغ** : ${graphic} `);

      return interaction.reply({ embeds: [embed] });
    } else {
      const errorEmbed = new MessageEmbed()
        .setColor('#FF264F')
        .setDescription('شما هنوز در رول پلی ثبت نام نکرده اید!');

      return interaction.reply({ embeds: [errorEmbed] });
    }
  },
};