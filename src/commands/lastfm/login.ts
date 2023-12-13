import { Args, Command } from '@sapphire/framework';
import type { Message } from 'discord.js';
import { EmbedBuilder } from 'discord.js';
import { Lstfm } from '../../models/lastfm';

export class Login extends Command {
  public constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'login',
      aliases: ['lfmlg'],
      description: 'nowplaying command for lastfm'
    });
  }

  public async messageRun(message: Message, args: Args) {
    const username = await args.pick('string');
    const userId = message.author.id

    await Lstfm.create({userId, username})
    message.react("👍");

    const embed = new EmbedBuilder()
    .setTitle("Logged in Succesfully")
    .setDescription(` \`\`\`\nlast.fm username: ${username}\ndiscord id: ${userId} \`\`\` `)
    .setColor("#4982e9")
    .setTimestamp()
    .setFooter({ text: `Requested by ${message.author.username}`, iconURL: message.author.displayAvatarURL()});
    
  
  
  await message.channel.send({ embeds: [embed] });
    }
}