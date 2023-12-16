import { Listener } from '@sapphire/framework';
import {  Guild, type Client, EmbedBuilder } from 'discord.js';

export class GuildRemove extends Listener {
  public async run(guild: Guild, client: Client) {

    const guildCreated = new EmbedBuilder()
        .setColor("Red")
        .setAuthor({ name: "Louise has been removed from a guild.", iconURL: guild.iconURL() ?? 'https://external-preview.redd.it/4PE-nlL_PdMD5PrFNLnjurHQ1QKPnCvg368LTDnfM-M.png?auto=webp&s=ff4c3fbc1cce1a1856cff36b5d2a40a6d02cc1c3'})
        .setTitle(`Guild Name: ${guild.name}`)
        .setThumbnail(guild.iconURL({ size: 1024 }) ?? 'None')
    const payload = { embeds: [ guildCreated ]}
    await fetch(`https://discord.com/api/webhooks/1184465711821754411/srW20OmMVXN3U2OlQAuWs0otTDkATIfqboRIczHnYHZ4pta8GiIOQEzOWHcE1okTWGJf`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(payload)
    })
  }
}