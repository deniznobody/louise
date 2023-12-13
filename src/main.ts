import { LogLevel, SapphireClient } from "@sapphire/framework";
import '@sapphire/plugin-logger/register';
import 'dotenv/config'
const token = process.env.TOKEN;

const client = new SapphireClient({
    intents: ['Guilds', 'GuildMessages', 'MessageContent'],
    loadMessageCommandListeners: true,
    defaultPrefix: '$',
    logger: {
        level: LogLevel.Debug
    }
});

client.login(token)