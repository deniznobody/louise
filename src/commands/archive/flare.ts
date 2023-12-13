import { Command } from '@sapphire/framework';
import type { Message } from 'discord.js';

export class Flare extends Command {
  public constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'flare',
      aliases: ['flr'],
      description: 'flare'
    });
  }

  public async messageRun(message: Message) {
    message.channel.send('https://cdn.discordapp.com/attachments/1117874433084883018/1183974382377377893/20231211_222525.jpg https://cdn.discordapp.com/attachments/1117874433084883018/1183974382121533492/20231211_222508.jpg ');
  }
}