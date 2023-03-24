# rus:

## Функции:
```js
start("yotu token");
setCommand({
  name: "my name command",
  run(client, message, args) => {
    // discord.js code
  }
});
```
 ## Экземпляр
 ```js
 const AreClient = require('are-discord);
 
 const bot = new AreClient({
   prefix: "!",
   intents: 3276541
 });
 ```

## пример работы с ботом

```js
const AreDiscord = require('are-disocrd');

const bot = new AreDiscord({
  prefix: "!",
  intents: 3276541
});

bot.setCommand({
  name: "ping",
  run: async (client, message, args) => {
    message.channel.send("Pong!");
  }
});

bot.start("MTA4MDUyMjcwNzk5MDQ5OTM5OQ.G4Kdsq.Cuyw3-w10M_rjIkFrNf7j2hCoD9IRrErWGDr-w");
```

# English

## functions
```js
start("you token");
setCommand({
  name: "my name command",
  run(client, message, args) => {
    // discord.js code
  }
});
```

## instance
```js
const AreClient = require('are-discord);
 
 const bot = new AreClient({
   prefix: "!",
   intents: 3276541
 });
 ```
 
 ## bot example
 
 ```js
 const AreDiscord = require('are-disocrd');

const bot = new AreDiscord({
  prefix: "!",
  intents: 3276541
});

bot.setCommand({
  name: "ping",
  run: async (client, message, args) => {
    message.channel.send("Pong!");
  }
});

bot.start("MTA4MDUyMjcwNzk5MDQ5OTM5OQ.G4Kdsq.Cuyw3-w10M_rjIkFrNf7j2hCoD9IRrErWGDr-w");
```