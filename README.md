# rus:
- Библиотека создана с целью упрощения написания ботов на discord.js.
- Методы, функции, классы довольны коротки и быстро запоминаются.
- Пока находится бета тестировании и может вызвать оторжения, ошибки и что то в том роде.

 ## Экземпляр
```js
const { Bot, MessageEmbed } = require('are-discord');

const bot = new Bot({
  prefix: ["!", "@"],
  intents: 3276541
});

bot.command({
  name: "ping",
  run: async (client, message, args) => {
    const ping = new MessageEmbed()
    .setTitle("пинг")
    .setDescription(`<@${bot.getId}>, задрежка: ${bot.ping}`)
    .setColor('#FF0000')
    message.reply({ embeds: [ping] });
  }
})

bot.command({
  name: `rand`,
  run: (client, message, args) => {
    
    message.reply(`<@${bot.getId}>, вот рандомное число: ${bot.random(100, 500)}`)
  }
});

bot.start("token");
```

# Методы
```
getId // выдает айди автра
getName // выжает имя и тэг
ping // выдает задержку
ban(getId, 10s, "пом домидор") // банит 
isBan // проверяет в бане ли
unban // разбанивает
```

[токен](https://discord.com/developers/applications)
[сервер поддержки](https://discord.gg/m8Af3GQp)