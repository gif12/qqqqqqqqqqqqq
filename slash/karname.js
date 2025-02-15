
const { MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton,Collection} = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const fs = require('fs');



module.exports = {
  data: {
    name: 'breeder',
    description: 'Breeder cmd',
  },
  async execute(interaction) {
      const data = JSON.parse(fs.readFileSync('./data.json'));
        const user = data.users.find(u => u.id === interaction.user.id);
      
        if (!user) {
            await interaction.reply({ content: 'You are not registered! \n Please use the /sign_up command', ephemeral: true });
            return;
        }
    const nu12 = Math.floor(Math.random() * 8876653455985324445788882) + 1;
      console.log(nu12);
    const nu122 = `${nu12}`
    const lang = user.lang
const selectMenu = new MessageSelectMenu()
      .setCustomId(nu122)
      .setPlaceholder(lang === 'fa' ? 'یک گزینه انتخاب کنید' : 'Select an option')
      .addOptions([
        {
          label: lang === 'fa' ? 'دریافت محصولات و فروش آنها' : 'Get Products and Sales',
          description: '',
          value: 'get-products',
        },
        {
          label: lang === 'fa' ? `**ارتقاء پرورشگاه**` : '**Upgrade the Breeder**',
          description: '',
          value: 'upgrade',
          emoji: '<:levelup:1118462210591707157>',
        },
        {
          label: lang === 'fa' ? '**نمایش اطلاعات پرورشگاه**' : '**Show the Breeder Information**',
          description: '',
          value: 'show-info',
        },
        {
          label: lang === 'fa' ? 'خرید پرورشگاه' : 'Buy the Breeder',
          description: '',
          value: 'buy-breeder',
          emoji: '<:shop:1117463048140095549>',
        },
      ]);

    const row2 = new MessageActionRow().addComponents(selectMenu);

    const embed = new MessageEmbed()
      .setTitle(lang === 'fa' ? 'پرورشگاه' : 'Breeder')
      .setDescription(lang === 'fa' ? 'برای ادامه یک گزینه را انتخاب کنید.' : 'Please select an option to proceed.')
      .setColor('#BLACK')
      .setThumbnail('https://i.imgur.com/h73Mz6I.jpg');

    await interaction.reply({
      embeds: [embed],
      components: [row2],
    });

    const message = await interaction.fetchReply();
    const filter = (interaction) =>
      interaction.isMessageComponent() &&
      interaction.customId === nu122;

    const collector = interaction.channel.createMessageComponentCollector({
      filter,
      time: 120000
    });

    collector.on('collect', async (interaction) => {
      let responseMessage;

      switch (interaction.values[0]) {
        case 'get-products':



                  
              
        const nu = Math.floor(Math.random() * 8876653455985324445788882) + 1;
      console.log(nu);


          const user1 = interaction.user;

      const b1 = `${33455*nu}`
      const b2 = `${36537*nu}`
      const b3 = `${5673*nu}`
      const b4 = `${6664*nu}`
      const b5 = `${8674*nu}`
    // خواندن پایگاه داده از فایل 'data.json'
    let rawData = fs.readFileSync('./data.json');
    let database = JSON.parse(rawData);

    // پیدا کردن کاربر در پایگاه داده
    const userObject = database.users.find(userObj => userObj.id === user1.id);
     

                                                                                                                        
                                                                                                                                            

       


        // Check if user has registered
      


          const lang = user.lang
          const idu = user.id
          let row;
if (lang === 'fa') {
    row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId(b1)
                .setLabel('شیر گاو')
                .setStyle('PRIMARY'),
            new MessageButton()
                .setCustomId(b2)
                .setLabel('تخم مرغ')
                .setStyle('PRIMARY'),
            new MessageButton()
                .setCustomId(b3)
                .setLabel('شیر بز')
                .setStyle('PRIMARY'),
            new MessageButton()
                .setCustomId(b4)
                .setLabel('تخم شترمرغ')
                .setStyle('PRIMARY'),
        ); 
} else {
    row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId(b1)
                .setLabel('Cow Milk')
                .setStyle('PRIMARY'),
            new MessageButton()
                .setCustomId(b2)
                .setLabel('Eggs')
                .setStyle('PRIMARY'),
            new MessageButton()
                .setCustomId(b3)
                .setLabel('Goat Milk')
                .setStyle('PRIMARY'),
            new MessageButton()
                .setCustomId(b4)
                .setLabel('Ostrich Eggs')
                .setStyle('PRIMARY'),
        ); 
}
      
        if (user.mazraeh === 0) {
            return interaction.reply({ content: lang === 'fa' ? 'شما پرورشگاه ندارید' : 'You don`t have an Breeder', ephemeral: true });
        }
      







    

    const dataFile = fs.readFileSync('./data.json');
    const data2 = JSON.parse(dataFile);

    const userData = data.users.find(u => u.id === interaction.user.id);
          

    const cooldownDataFile = fs.readFileSync('./cool1.json', {encoding: 'utf8', flag: 'a+'});

    let cooldowns;
    if (cooldownDataFile) {
      cooldowns = new Collection(JSON.parse(cooldownDataFile));
    } else {
      cooldowns = new Collection();
    }

    const cooldownName = 'give';
    const now = Date.now();
    const cooldownEnd = cooldowns.get(`${interaction.user.id}-${cooldownName}`);

    if (cooldownEnd && cooldownEnd > now) {
      const timeLeft = Math.ceil((cooldownEnd - now) / (60000));
      const embed = new MessageEmbed()
        .setColor('#BLACK')
        .setDescription(lang === 'fa' ? `شما میتوانید ${timeLeft} دقیقه بعد مجدد امتحان کنید` : `You can use this command again in ${timeLeft} minute(s)`);
      return interaction.reply({ embeds: [embed], ephemeral: true });
    } else {
      cooldowns.set(`${interaction.user.id}-${cooldownName}`, now + 60000); 
      fs.writeFileSync('./cool1.json', JSON.stringify(Array.from(cooldowns.entries())));
    }















          



          
         user.tokhm += user.morg;
         user.shir_kaw += 5*user.kaw;    
          user.shir_boz += 2*user.boz;      
          user.tokhm_shotor += user.shotor_morg;
          fs.writeFileSync('./data.json', JSON.stringify(data)); 

              const buttonEmbed = new MessageEmbed()
            .setTitle(lang === 'fa' ? 'لیست محصولات' : 'products List')
            .setColor('BLACK')
            if (lang === 'fa') {
  buttonEmbed.setDescription(`**__شما محصولات جدید خود را دریافت کردید__**\n\n**تخم مرغ : ${user.tokhm} عدد \n شیر بز : ${user.shir_boz} لیتر \n شیر گاو : ${user.shir_kaw} لیتر\n تخم شترمرغ : ${user.tokhm_shotor} عدد**`);
} else {
  buttonEmbed.setDescription(`**__You have received new products__**\n\n**Eggs: ${user.tokhm}\nGoat Milk: ${user.shir_boz} Liters\nCow Milk: ${user.shir_kaw} Liters\nOstrich Eggs: ${user.tokhm_shotor}**`);
}                                
      await message.edit({ content:'‌‌ ', embeds: [buttonEmbed], components: [row,row2] });
  


        const filter = interaction => interaction.customId === b1 || interaction.customId === b2 || interaction.customId === b3 || interaction.customId === b4;
          

        const collector = interaction.channel.createMessageComponentCollector({ filter,time:60000});

      
        collector.on('collect', async interaction => {
            if (interaction.customId === b2) {


              console.log(idu)
              
                      if (interaction.user.id !== idu) {
                    return interaction.reply({ content: lang === 'fa' ? ' شما نمی توانید کلیک کنید' : 'You don`t have an Breeder', ephemeral: true });
        }
                if (user.tokhm == 0) {
                    return interaction.reply({ content: lang === 'fa' ? 'شما تخم مرغ برای فروش ندارید' : ' You have no eggs to sell', ephemeral: true });
                }
              
                const all1 = 500*user.tokhm;
                user.balance += 500*user.tokhm;
                const totall = user.tokhm
                user.tokhm *= 0;
  

                const embed = new MessageEmbed()
                    .setTitle(lang === 'fa' ? 'فروش موفق' : ' Successful sale')
                    .setDescription(lang === 'fa' ? `شما ${totall} عدد تخم مرغ را به قیمت ${all1} فروختید` : `You sold ${totall} number of eggs for the price of ${all1}`);

                fs.writeFileSync('./data.json', JSON.stringify(data));
                return interaction.reply({ content: '', embeds: [embed], ephemeral: true });
            } else if (interaction.customId === b3) {
   

              console.log(idu)
              
                      if (interaction.user.id !== idu) {
                    return interaction.reply({ content: lang === 'fa' ? ' شما نمی توانید بر روی دکمه کلیک کنید ' : 'You cannot click on the button', ephemeral: true });
        }
      
                if (user.shir_boz == 0) {
                    return interaction.reply({ content: lang === 'fa' ? 'شما شیر بز برای فروش ندارید' : ' You have no goat milk to sell', ephemeral: true });
                }
              
                const all2 = 1200*user.shir_boz;
                user.balance += 1200*user.shir_boz;
                const total2 = user.shir_boz
                user.shir_boz *= 0;
  

                    
        
       


              const embed = new MessageEmbed()
                setDescription(lang === 'fa' ? `شما ${total2} لیتر شیر بز را به قیمت ${all2} فروختید` : `You sold ${total2} liter of goat milk for the price of ${all2}`);



       fs.writeFileSync('./data.json', JSON.stringify(data));
                return interaction.reply({ content: '‌', embeds: [embed], ephemeral: true    });
            } else if (interaction.customId === b1) {
   

              console.log(idu)
              console.log(interaction.user.id)
                      if (interaction.user.id !== idu) {
                    return interaction.reply({ content: lang === 'fa' ? ' شما نمی توانید کلیک کنید' : 'You don`t have an Breeder', ephemeral: true });
        }
                if (user.shir_kaw == 0) {
                    return interaction.reply({ content: lang === 'fa' ? 'شما شیر گاو برای فروش ندارید' : ' You have no cow milk to sell', ephemeral: true });
                }
              
                const all3 = 2000*user.shir_kaw;
                user.balance += 2000*user.shir_kaw;
                const total3 = user.shir_kaw
                user.shir_kaw *= 0;
  

                const embed = new MessageEmbed()
                                        .setTitle(lang === 'fa' ? 'فروش موفق' : ' Successful sale')
                    .setDescription(lang === 'fa' ? `شما ${total3} لیتر شیر گاو را به قیمت ${all3} فروختید` : `You sold ${total3} Liter of cow milk for the price of ${all3}`);

                fs.writeFileSync('./data.json', JSON.stringify(data));
                return interaction.reply({ content: '‌', embeds: [embed], ephemeral: true});
           } else if (interaction.customId === b4) {
   

              console.log(idu)
              
                      if (interaction.user.id !== idu) {
                    return interaction.reply({ content: lang === 'fa' ? ' شما نمی توانید کلیک کنید' : 'You don`t have an Breeder', ephemeral: true });
        }
                if (user.tokhm_shotor == 0) {
                    return interaction.reply({ content: lang === 'fa' ? 'شما تخم شترمرغ برای فروش ندارید' : ' You have no ostrich egg to sell', ephemeral: true });
                }
              
                const all4 = 1000*user.tokhm_shotor;
                user.balance += 1000*user.tokhm_shotor;
                const total4 = user.tokhm_shotor
                user.tokhm_shotor *= 0;
  

                const embed = new MessageEmbed()
                                    .setTitle(lang === 'fa' ? 'فروش موفق' : ' Successful sale')                
.setDescription(lang === 'fa' ? `شما ${total4} عدد تخم شترمرغ را به قیمت ${all4} فروختید` : `You sold ${total4} number of ostrich egg for the price of ${all4}`);

                fs.writeFileSync('./data.json', JSON.stringify(data));
                return interaction.reply({ content: '‌', embeds: [embed], ephemeral: true         });
            }
        });

        collector.on('end', collected => {
            if (collected.size === 0) { } else {}
        });
    
 break;
        case 'upgrade':
        

                 const nu3 = Math.floor(Math.random() * 8876653455985324445788882) + 1;
      console.log(nu3);


          const user13 = interaction.user;

      const b13 = `${33455*nu3}`
      const b23 = `${36537*nu3}`
      const b33 = `${5673*nu3}`
      const b43 = `${6664*nu3}`
      const b53 = `${8674*nu3}`
    // خواندن پایگاه داده از فایل 'data.json'
        const buttonEmbed3 = new MessageEmbed()
            .setTitle('ارتقا پرورشگاه')
            .setColor('BLACK')
            .setDescription(`**جهت افزودن حیوانات بیشتر به پرورشگاه خود از دکمه های زیر استفاده کنید**`);

        const row3 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId(b33)
                    .setLabel('گاو')
                    .setStyle('PRIMARY'),
                new MessageButton()
                    .setCustomId(b13)
.setLabel('مرغ')
                    .setStyle('PRIMARY'),
                new MessageButton()
                    .setCustomId(b23)
.setLabel('بز')
                    .setStyle('PRIMARY'),
                new MessageButton()
                    .setCustomId(b43)
                    .setLabel('شترمرغ')
                    .setStyle('PRIMARY'),
            );

        // Check if user has registered
      
        const data3 = JSON.parse(fs.readFileSync('./data.json'));
        const user3 = data3.users.find(u => u.id === interaction.user.id);
      
        if (!user3) {
            await interaction.reply({ content: 'شما ثبت نام نکرده اید! لطفا از دستور /sabtname استفاده کنید', ephemeral: true });
            return;
        }

          const idu3 = user3.id
          
          
      
        if (user3.mazraeh === 0) {
            return interaction.reply({ content: 'شما پرورشگاه خریداری نکرده اید', ephemeral: true });
        }


          
      await message.edit({ content:'‌‌ ', embeds: [buttonEmbed3], components: [row3,row2] });

        const filter3 = i => i.customId === b13 || i.customId === b23 || i.customId === b33 || i.customId === b43;

        const collector3 = interaction.channel.createMessageComponentCollector({ filter3, time: 120000 });

        collector3.on('collect', async i => {
            if (i.customId === b13) {


              console.log(idu3)
              console.log(i.user.id)
                      if (i.user.id !== idu3) {
                    return i.reply({ content: 'شما اجرا کننده نیستید', ephemeral: true });
        }
                if (user3.morg >= 50) {
                    return i.reply({ content: 'ظرفیت شما تکمیل است', ephemeral: true });
                }
                if (user3.balance < 10000) {
                    return i.reply({ content: 'شما ۴۰هزار برگ برای این خرید ندارید!', ephemeral: true });
                }
                user3.morg += 1;
                user3.balance -= 10000;

                const embed = new MessageEmbed()
                    .setTitle('خرید موفق')
                    .setDescription(`تعداد مرغ های شما به ${user3.morg} عدد افزایش یافت با هزینه 10 هزار برگ`);

                fs.writeFileSync('./data.json', JSON.stringify(data3));
                return i.reply({ content: 'خرید با موفقیت انجام شد!', embeds: [embed], ephemeral: true });
            } else if (i.customId === b23) {
                                                        if (i.user.id !== idu3) {
                    return i.reply({ content: 'شما اجرا کننده نیستید', ephemeral: true });
        }
                if (user3.boz >= 50) {
                    return i.reply({ content: 'ظرفیت تکمیل است', ephemeral: true });
                }
             if (user3.balance < 40000) {
                    return i.reply({ content: 'شما 40 هزار برگ برای این خرید ندارید!', ephemeral: true });
                }
                user3.boz += 1;
                user3.balance -= 40000;

                const embed = new MessageEmbed()
                    .setTitle('خرید موفق')
                    .setDescription(`تعداد بز های شما به ${user3.boz} عدد افزایش یافت با هزینه 40 هزار برگ`);

                fs.writeFileSync('./data.json', JSON.stringify(data3));
                return i.reply({ content: 'خرید با موفقیت انجام شد!', embeds: [embed], ephemeral: true });
            } else if (i.customId === b33) {
                                                        if (i.user.id !== idu3) {
                    return i.reply({ content: 'شما اجرا کننده نیستید', ephemeral: true });
        }
                if (user3.kaw >= 30) {
                    return i.reply({ content: 'ظرفیت تکمیل است', ephemeral: true });
                }
                if (user3.balance < 120000) {
                    return i.reply({ content: 'شما 120 هزار برگ برای این خرید ندارید!', ephemeral: true });
                }
                user3.kaw += 1;
                user3.balance -= 120000;

                const embed = new MessageEmbed()
                    .setTitle('خرید موفق!')
                    .setDescription(`تعدا گاو های شما به ${user3.kaw} عدد افزایش یافت با هزینه 120 هزار برگ`);

                fs.writeFileSync('./data.json', JSON.stringify(data3));
                return i.reply({ content: 'خرید با موفقیت انجام شد!', embeds: [embed], ephemeral: true });
            } else if (i.customId === b43) {
                                                        if (i.user.id !== idu3) {
                    return i.reply({ content: 'شما اجرا کننده نیستید', ephemeral: true });
        }
                if (user3.shotor_morg >= 80) {
                    return i.reply({ content: 'ظرفیت تکمیل است', ephemeral: true });
                }
                if (user3.balance < 80000) {
                    return i.reply({ content: 'شما 80 هزار برگ برای این خرید ندارید!', ephemeral: true });
                }
                user3.shotor_morg += 1;
                user3.balance -= 80000;

                const embed = new MessageEmbed()
                    .setTitle('خرید موفق!')
                    .setDescription(`تعداد شتر مرغ های شما به ${user3.shotor_morg}عدد افزایش یافت با هزینه 80 هزار برگ`);

                fs.writeFileSync('./data.json', JSON.stringify(data3));
                return i.reply({ content:'خرید با موفقیت انجام شد!', embeds: [embed], ephemeral: true });
            }
        });

        collector3.on('end', collected => {
            if (collected.size === 0) {} else {}
        });
     


          break;
        case 'show-info':

          const user123 = interaction.user;

    // خواندن پایگاه داده از فایل 'data.json'
    let rawData123 = fs.readFileSync('./data.json');
    let database123 = JSON.parse(rawData123);

    // پیدا کردن کاربر در پایگاه داده
    const userObject123 = database123.users.find(userObj => userObj.id === user123.id);

    if (userObject123) {
      const cpu = userObject123.boz;
      const ram = userObject123.kaw;
      const disk = userObject123.shotor_morg;
      const graphic = userObject123.morg;
      const embed = new MessageEmbed()
        .setColor('#BLACK')
        .setDescription(`\n**__مشخصات پرورشگاه شما :__**\n\n**گاو :** : ${ram} \n\n**بز** : ${cpu} \n\n**شترمرغ** : ${disk} \n\n**مرغ** : ${graphic} `);

      return message.edit({ embeds: [embed] ,components: [row2] });
    } else {
      const errorEmbed = new MessageEmbed()
        .setColor('#BLACKB')
        .setDescription('شما هنوز در رول پلی ثبت نام نکرده اید!');

      return message.edit({ embeds: [errorEmbed] ,components: [row2] });
    }
          


          break;
        case 'buy-breeder':
          
    const user12 = interaction.user;
    // خواندن پایگاه داده از فایل 'data.json'
    let rawData12 = fs.readFileSync('./data.json');
    let database12 = JSON.parse(rawData12);

    // پیدا کردن کاربر در پایگاه داده
    const userIndex12 = database12.users.findIndex(userObj => userObj.id === user12.id);

    if (userIndex12 !== -1) {
      const karLevel = database12.users[userIndex12].mazraeh;
      const remainingChoghs = database12.users[userIndex12].balance;

      if (remainingChoghs < 1000000) {
        const errorEmbed = new MessageEmbed()
          .setColor('#FF264F')
          .setDescription('شما یک میلیون برگ برای خرید پرورشگاه ندارید');

        return message.edit({ embeds: [errorEmbed], components: [row2] });
      }
            if (karLevel === 1) {
        const errorEmbed = new MessageEmbed()
          .setColor('#FF264F')
          .setDescription('قبلا پرورشگاه خریداری کرده اید');

        return message.edit({ embeds: [errorEmbed], components: [row2] });
      }

      database12.users[userIndex12].mazraeh = Math.min(karLevel + 1, 1);
      database12.users[userIndex12].balance = remainingChoghs - 1000000;

        // نوشتن تغییرات پایگاه داده در فایل 'data.json'
      fs.writeFileSync('./data.json', JSON.stringify(database12));

      const successEmbed = new MessageEmbed()
        .setColor('#09F50E')
        .setDescription(`شما یک پرورشگاه خریدید با هزینه یک میلیون برگ`);

      return message.edit({ embeds: [successEmbed] ,components: [row2] });
    } else {
      const errorEmbed = new MessageEmbed()
        .setColor('#FF264F')
        .setDescription('شما هنوز در رول پلی ثبت نام نکرده اید!');

      return message.edit({ embeds: [errorEmbed] ,components: [row2] });
    }
  


          
          break;

        default:
          break;
      }

      // بسازید Embed جدید برای پاسخ به انتخاب کاربر

    });

    collector.on('end', async () => {});
  },
};