import { Command } from '@sapphire/framework';
import type { Message } from 'discord.js';
import { EmbedBuilder } from 'discord.js';
import { Lstfm } from '../../models/lastfm';

export class NowPlaying extends Command {
  public constructor(context: Command.LoaderContext, options: Command.Options) {
    super(context, {
      ...options,
      name: 'nowplaying',
      aliases: ['np', 'fm'],
      description: 'Check what you are listening to currently using the LastFM api. \n \`\`\`Usage: ,lf\`\`\`'
    });
  }

  public async messageRun(message: Message) {
    let uname = await Lstfm.findOne({userId: message.author.id});
    let username = uname?.username;
    if(!uname) return message.channel.send("You are not logged in, please use the `login` command to log in");

      const token = process.env.lfm
      const res1 = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=${username}&api_key=${token}&format=json`);
      const pcs = await res1.json();
      const res = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${username}&api_key=${token}&format=json&nowplaying=true&limit=1`);
      const jsonRes = await res.json();
      const currentTrack = jsonRes.recenttracks.track[0];
      if(currentTrack['@attr']) {      
              const embed = new EmbedBuilder()
              .setAuthor({
                  name: `Now Playing - ${username}`,
                  iconURL: message.author.displayAvatarURL()
              })
            .setTitle(`${currentTrack.name}`)
            .setURL(`${currentTrack.url}`)
            .setDescription(`**${currentTrack.artist['#text']}** - ${currentTrack.album['#text']}`)
            .setThumbnail(`${currentTrack.image[2]['#text']}`)
            .setColor("#4982e9")
            .setFooter({
            text: `Total Scrobbles: ${pcs.user.playcount}`,
            })
          .setTimestamp();

        message.channel.send({ embeds: [ embed ]})
      } else return;
  }
}

