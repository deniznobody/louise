import { Command, CommandOptions } from '@sapphire/framework';
import { Message, EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder, MessageComponentInteraction, ComponentType } from 'discord.js';

export class HelpCommand extends Command {
    public constructor(context: Command.LoaderContext, options: CommandOptions) {
        super(context, {
            ...options,
            name: 'help',
            aliases: ['h'],
            description: 'Shows all commands.'
            
        });
    }

    public async messageRun(message: Message): Promise<void> {
        const cmds = this.container.stores.get('commands');
        const categories = new Map<string, Command[]>();

        cmds.forEach(cmd => {
            const category: string = cmd.category || 'Uncategorized';
            const list = categories.get(category) || [];
            list.push(cmd);
            categories.set(category, list);
        });

        const selectMenu = new StringSelectMenuBuilder()
            .setCustomId('select-help')
            .setPlaceholder('Choose a category')
            .addOptions(
                Array.from(categories.keys()).map(category => ({
                    label: category,
                    description: `Commands from the ${category} category`,
                    value: category
                }))
            );

        const row = new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(selectMenu);

        const msg =await message.channel.send({
            components: [row]
        });

        const filter = (interaction: MessageComponentInteraction) => 
            interaction.isStringSelectMenu() && 
            interaction.customId === 'select-help' && 
            interaction.user.id === message.author.id;

        const collector = message.channel.createMessageComponentCollector({
            filter,
            componentType: ComponentType.StringSelect,
            time: 60000
        });

        collector.on('collect', async (interaction: MessageComponentInteraction) => {
            if (!interaction.isStringSelectMenu()) return;

            const selectedCategory = interaction.values[0];
            const commands = categories.get(selectedCategory);
            if(commands) {
              const embed = new EmbedBuilder()
              .setTimestamp()
              .setTitle(`Help - ${selectedCategory}`)
              .setDescription(`<> - required argument\n[] - optional argument`)
              .setFooter({ text: `Requested by ${message.author.username}`, iconURL: message.author.displayAvatarURL()})  
              .setColor(0x0099ff)
                commands.forEach(cmd => {
                  embed.addFields({ name: cmd.name, value: cmd.description  || 'No description' });
              });

          await interaction.update({ embeds: [embed], components: [row] });
            }
        });

        collector.on('end', () => {
            message.delete()
        });
    }
}
