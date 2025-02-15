const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton, Collection } = require('discord.js');
const fs = require('fs');
 
// تابع تولید رشته تصادفی
function generateID() {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < 10; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}


module.exports = {
  data: new SlashCommandBuilder()
    .setName('sabtname')
    .setDescription('ثبت‌نام کاربر جدید'),
  async execute(interaction) {
    const b1 = `${generateID()}`
    const b2 = `${generateID()}`
    const b3 = `${generateID()}`
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
            .setCustomId(b1)
            .setLabel('Persian')
            .setEmoji('🇮🇷')
            .setStyle('PRIMARY'),
          new MessageButton()
            .setCustomId(b2)
            .setLabel('English')
            .setEmoji('🇺🇸')
            .setStyle('PRIMARY')
         // new MessageButton()
         //   .setCustomId(b3)
         //   .setLabel('arabic')
         //   .setEmoji('🇸🇦')
        //    .setStyle('PRIMARY')
        );
      const langEmbed = new MessageEmbed()
        .setColor('#BLACK')
        .setTitle('ثبت نام')

       .setAuthor(`${user.username}`,`${interaction.user.avatarURL()}`)
        .setThumbnail('https://cdn.discordapp.com/avatars/1110209254671003668/90c244654a189653114638dd2e8da625.webp')
        .setDescription('**زبان خود را انتخاب کنید\n Choose your language** \n');

      await interaction.reply({ embeds: [langEmbed], components: [langBtn] });

      const filter = i => i.customId === b1 || i.customId === b2; // || i.customId === b3;
      const collector = interaction.channel.createMessageComponentCollector({ filter, time:10000, max: 1 });

      collector.on('collect', async i => {
        let lang = '';
        let translatedText = '';
        if (i.customId === b1) {
          lang = 'fa';
          translatedText = `\nنام کاربری : ${user.username} \n زبان : ${lang} `;
        } else if (i.customId === b2) {
          lang = 'en';
          translatedText = `\n user : ${user.username} \n lang : ${lang} `;
        } else if (i.customId === b3) {
          lang = 'ar';
          translatedText = `\n اسم المستخدم : ${user.username} \n لغة : ${lang} `;
        }
        const newUserObject = { id: user.id,balance: 50000000 ,kaw: 0 , boz: 0 , morg: 0 , shotor_morg:0 ,tokhm:0 ,shir_boz:0,shir_kaw:0,tokhm_shotor:0 ,mazraeh: 1, lang};
        database.users.push(newUserObject);

        // نوشتن تغییرات پایگاه داده در فایل `data.json`
        fs.writeFileSync('./data.json', JSON.stringify(database));

        const resultEmbed = new MessageEmbed()
          .setColor('#BLACK')
          .setTitle('Successful')
          .setAuthor(`${user.username}`,`${interaction.user.avatarURL()}`)

.setThumbnail('https://cdn.discordapp.com/avatars/1110209254671003668/90c244654a189653114638dd2e8da625.webp')
  .setDescription(`${translatedText}`);

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
};