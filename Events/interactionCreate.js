module.exports = {
    name: 'interactionCreate',
    once: false,
    async execute(interaction, client){
        if(interaction.isChatInputCommand()){
            const command = await client.commands.get(interaction.commandName);
            if(!command) return await interaction.reply({ content: "Este comando está desactualizado.", ephemeral: true });

            if(command.developer && interaction.user.id !== "1175158158579220503")
            return await interaction.reply({ content: "Este comando esta deshabilitado.", ephemeral: true });

            await command.execute(interaction, client);
        }
    }
}
