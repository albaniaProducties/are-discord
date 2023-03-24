const { Client } = require('discord.js');

class AreClient extends Client {
  constructor(options) {
    super(options);
    this.prefix = options.prefix || "!";
    this.commands = new Map();
    this.on('messageCreate', this.handleMessage.bind(this));
  }

  async handleMessage(message) {
    const bot = this;
    if (message.author.bot || !message.content.startsWith(this.prefix)) return;
    const args = message.content.slice(this.prefix.length).trim().split(/ +/g);
    const commandName = args.shift().toLowerCase();
    const command = this.commands.get(commandName);
    if (!command) return;
    try {
      await command.run(bot, message, args);
    } catch (error) {
      console.error(error);
      message.reply('there was an error trying to execute that command!');
    }
  }

  setCmmand(command) {
    this.commands.set(command.name, command);
  }

  async start(token) {
    try {
      await this.login(token);
      console.log(`Logged in as ${this.user.tag}!`);
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = AreDiscord;