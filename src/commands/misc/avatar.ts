import { Args, Command } from '@sapphire/framework';
import type { Message } from 'discord.js';
import { EmbedBuilder } from 'discord.js';
import { Lstfm } from '../../models/lastfm';

export class Avatar extends Command {
  public constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'avatar',
      aliases: ['av'],
      description: 'Shows a users avatar \n \`\`\`Usage: ,avatar <@user>\`\`\`'
    });
  }

public async messageRun(message: Message, args: Args) {
    
    let user = message.mentions.users.first() || message.author;

            const avatar = new EmbedBuilder()
                    .setDescription(`${user.username}'s [avatar](${user.displayAvatarURL()})`)
                    .setFooter({ text: `Requested by ${message.author.username}` })
                    .setImage(user.displayAvatarURL({ size: 1024 }))
                    .setTimestamp()
                    .setColor("#4982e9")

        message.channel.send({ embeds: [avatar] });
    }
}