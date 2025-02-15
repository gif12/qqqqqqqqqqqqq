const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const fs = require('fs');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('sabtname')
    .setDescription('ثبت‌نام کاربر جدید'),
  async execute(interaction) {
    const user = interaction.user;

    // خواندن پایگاه داده از فایل `data.json`
    let rawData = fs.readFileSync('./data.json');
    let database = JSON.parse(rawData);

    // پیدا کردن کاربر در پایگاه داده
    const userIndex = database.users.findIndex(userObj => userObj.id === user.id);

    if (userIndex === -1) {

      const langBtn = new MessageActionRow()
        .addComponents(
          new MessageButton()
            .setCustomId('fa')
            .setLabel('فارسی')
            .setEmoji('🇮🇷')
            .setStyle('PRIMARY'),
          new MessageButton()
            .setCustomId('en')
            .setLabel('انگلیسی')
            .setEmoji('🇺🇸')
            .setStyle('PRIMARY'),
          new MessageButton()
            .setCustomId('ar')
            .setLabel('عربی')
            .setEmoji('🇸🇦')
            .setStyle('PRIMARY')
        );
      const langEmbed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('ثبت نام')
        .setDescription('زبان خود را انتخاب کنید');

      await interaction.reply({ embeds: [langEmbed], components: [langBtn] });

      const filter = i => i.customId === 'fa' || i.customId === 'en' || i.customId === 'ar';
      const collector = interaction.channel.createMessageComponentCollector({ filter, time:10000, max: 1 });

      collector.on('collect', async i => {
        let lang = '';
        let translatedText = '';
        if (i.customId === 'fa') {
          lang = 'fa';
          translatedText = 'ثبت نام شما با موفقیت انجام شد!';
        } else if (i.customId === 'en') {
          lang = 'en';
          translatedText = 'Your registration has been completed successfully!';
        } else if (i.customId === 'ar') {
          lang = 'ar';
          translatedText = '!تم إنهاء التسجيل الخاص بك بنجاح';
        }

        const newUserObject = { id: user.id, user: user.id,balance: 50000000 , kar_level: 1 , yarane: 1 , kar: "کارمند" , kaw: 0 , boz: 0 , morg: 0 , shotor_morg:0 , mazraeh: 1, lang};
        database.users.push(newUserObject);

        // نوشتن تغییرات پایگاه داده در فایل `data.json`
        fs.writeFileSync('./data.json', JSON.stringify(database));

        const resultEmbed = new MessageEmbed()
          .setColor('#09F50E')
          .setDescription(`${user.username} ${translatedText}`);

        await interaction.editReply({ embeds: [resultEmbed], components: []});
      });

      collector.on('end', collected => {
        if (collected.size === 0) {
          const resultEmbed = new MessageEmbed()
            .setColor('#FF264F')
            .setDescription(`${user.username} زمان تکمیل ثبت نام شما به پایان رسیده!`);

          interaction.editReply({ embeds: [resultEmbed], components: [] });
        }
      });

    } else {
      const errorEmbed = new MessageEmbed()
        .setColor('#FF264F')
        .setDescription(`شما قبلا در رول پلی ثبت نام کرده اید!`);

      await interaction.reply({ embeds: [errorEmbed] });
    }
  },
};k