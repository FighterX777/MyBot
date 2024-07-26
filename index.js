// Import the discord.js library
const Discord = require('discord.js');

// Create a new Discord client with intents
const client = new Discord.Client({
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
  ],
});

// Get the bot token from an environment variable
const token = process.env.DISCORD_BOT_TOKEN;

// Set the bot's prefix
const prefix = '!';

// Event listener for when the bot is ready
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Event listener for messages
client.on('messageCreate', (message) => {
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

// Check if the token is set
if (!token) {
  console.error('DISCORD_BOT_TOKEN environment variable is not set');
  process.exit(1);
}

// Login to Discord
client.login(token);
