import { Command } from '@sapphire/framework';
import type { Message } from 'discord.js';

export class Albani extends Command {
  public constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'albani',
      aliases: ['alba'],
      description: 'albani'
    });
  }

  public async messageRun(message: Message) {
    message.channel.send('https://cdn.discordapp.com/attachments/1117874433084883018/1183975637564784692/habibi.jpg');
  }
}