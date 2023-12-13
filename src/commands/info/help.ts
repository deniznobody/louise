import { Command } from '@sapphire/framework';
import type { Message } from 'discord.js';

export class HelpCommand extends Command {
  public constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'help',
      aliases: ['h'],
      description: 'the help command'
    });
  }

  public async messageRun(message: Message) {
    message.channel.send('help command');
  }
}   