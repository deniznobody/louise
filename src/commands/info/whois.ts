import { Command } from '@sapphire/framework';
import type { Message } from 'discord.js';

export class Whois extends Command {
  public constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'whois',
      aliases: ['wi'],
      description: 'the whois command'
    });
  }

  public async messageRun(message: Message) {
    await message.react("👀");
  }
}   