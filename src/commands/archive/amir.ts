import { Command } from '@sapphire/framework';
import type { Message } from 'discord.js';

export class Amir extends Command {
  public constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'amir',
      aliases: ['a'],
      description: 'amir'
    });
  }

  public async messageRun(message: Message) {
    message.channel.send('https://cdn.discordapp.com/attachments/1183516946247983328/1183516956633079879/image.png https://cdn.discordapp.com/attachments/1117874433084883018/1183976205507100742/image.png https://cdn.discordapp.com/attachments/1117874433084883018/1183978467184885811/image.png');
  }
}