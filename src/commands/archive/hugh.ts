import { Command } from '@sapphire/framework';
import type { Message } from 'discord.js';

export class Hugh extends Command {
  public constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'hugh',
      aliases: ['hgh'],
      description: 'hugh'
    });
  }

  public async messageRun(message: Message) {
    message.channel.send('https://cdn.discordapp.com/attachments/1117874433084883018/1183973905640198274/image.png');
  }
}