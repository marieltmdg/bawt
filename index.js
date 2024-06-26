import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds, // Allows the bot to access server info
        GatewayIntentBits.GuildMessages, // Allows the bot to listen for messages in guilds
        GatewayIntentBits.MessageContent // Allows the bot to access message content
    ]
});

const discordToken = process.env.DISCORD_TOKEN; // Retrieve token from environment variables

const config = {
    prefix: "!", // Command prefix
    token: discordToken // Token from .env
};

client.on('ready', () => {
    console.log("BAWT READY!");
});

client.on('messageCreate', async message => {
    if (message.author.bot) return; // Ignore messages from other bots
    if (message.channel.type === "dm") return; // Ignore direct messages

    // Command processor
    const [cmd, ...args] = message.content.trim().slice(config.prefix.length).split(/\s+/);

    if (cmd === "help") {
        message.channel.send("!gem - message for gem");
        message.channel.send("!t - tite");
        message.channel.send("!name - BAWT");
        message.channel.send("!creator - creator details");
    } else if (cmd === "gem") {
        message.channel.send("im lowv gem!\n-molly");
    } else if (cmd === "t") {
        message.channel.send("tite");
    } else if (cmd === "name") {
        message.channel.send("BAWT");
    } else if (cmd === "creator") {
        message.channel.send("molly");
    } else {
        message.channel.send(cmd + " command not recognized");
    }
});

client.login(config.token); // Login with the bot's token
