// Import the discord.js library
const Discord = require('discord.js');

// Create a new Discord client
const client = new Discord.Client();

// Get the bot token from an environment variable
const token = process.env.DISCORD_BOT_TOKEN;

// Set the bot's prefix
const prefix = '!';

// Event listener for when the bot is ready
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Event listener for messages
client.on('message', (message) => {
  // Check if the message starts with the prefix
  if (message.content.startsWith(prefix)) {
    // Get the command
    const command = message.content.substring(prefix.length);

    // Handle the command
    switch (command) {
      case 'hello':
        message.reply('Hello!');
        break;
      default:
        message.reply('Unknown command');
    }
  }
});

// Login to Discord
client.login(token);