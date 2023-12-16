import { LogLevel, SapphireClient } from "@sapphire/framework";
import '@sapphire/plugin-logger/register';
import 'dotenv/config'
import { Partials } from 'discord.js';
const token = process.env.TOKEN;

const client = new SapphireClient({
    intents: ['Guilds', 'GuildMessages', 'MessageContent'],
    partials: [Partials.Message, Partials.Reaction, Partials.Channel],
    loadMessageCommandListeners: true,
    defaultPrefix: ',',
    logger: {
        level: LogLevel.Debug
    }
});

client.login(token)