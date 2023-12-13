import { Listener } from '@sapphire/framework';
import { ActivityType, type Client } from 'discord.js';
import connectToDB from '../models/db';

export class ReadyListener extends Listener {
  public run(client: Client) {
    connectToDB()
    const { username, id } = client.user!;
    this.container.logger.info(`Successfully logged in as ${username} (${id})`);
    client.user?.setPresence({
        activities: [{
            name: '🧏 this is the mewing emoji',
            type: ActivityType.Streaming,
            url: 'https://twitch.tv/elraenn'
        }],
        status: 'dnd'
    })
  }
}