const { Client, EmbedBuilder } = require('discord.js');
const ws = require('ws');

class Bot extends Client {
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

  command(command) {
    this.commands.set(command.name, command);
  }
  
  get ping() {
    return this.ws.ping
  }
  
  get getName() {
    return this.user.username;
  }
  
  get getId() {
    return this.user.id;
  }
  
  random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  async ban({ days, reason }) {
    const guild = this.user.client.guilds.cache.find(guild => guild.members.cache.has(this.user.id));
    if (!guild) {
      return false;
    }

    const member = guild.members.cache.get(this.user.id);
    if (!member) {
      return false;
    }

    try {
      await guild.members.ban(member, { days, reason });
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
  
  async unBan(guild, memberId) {
    try {
      await guild.members.unban(memberId);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
  
  isBan(guild, memberId) {
    const bans = guild.bans.cache;
    return bans.some(ban => ban.user.id === memberId);
  }

  async start(token) {
    try {
      await this.login(token);
      console.log(`\x1b[36msucces login, as ${this.user.tag}\x1b[0m\n\x1b[32mOffical support server: https://discord.gg/m8Af3GQp \x1b[0m`)
    } catch (error) {
      console.error(error);
    }
  }
}

// class MessageEmbed creating in Class EmbedBuilder.

class MessageEmbed extends EmbedBuilder {
  constructor(embed) {
    super();
    if(typeof(embed) == "object") {
      if(embed.title) this.setTitle(embed.title);
      if(embed.description) this.setDescription(embed.description);
      if(embed.color) this.setColor(embed.color);
      if(embed.url) this.setURL(embed.url);
      if(embed.thumbnail) this.setThumbnail(embed.thumbnail);
      if(typeof(embed.author) == "object") {
        try {
          this.setAuthor(embed.author);
        } catch(e) {
          console.log(e);
        }
      }
      if(embed.timestamp) {
        if(embed.timestamp === true) {
          this.setTimestamp();
        } else {
          return;
        }
      }
      if(embed.footer) this.setFooter(embed.footer);
      if(embed.image) this.setImg(embed.image);
      if(embed.fields) this.addField(embed.fields);
      return this;
    }
  }
}

module.exports = {
  Bot,
  MessageEmbed
};

// ©️ 2023 @Albania Development