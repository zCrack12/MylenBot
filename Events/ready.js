const { ActivityType } = require('discord.js');
const { loadCommands } = require("../Handlers/commandHandler");
module.exports = {
    name: "ready",
    once: true,
    execute(client){
      console.log(`Conectado como ${client.user.tag}`);
client.user.setPresence({
      activities: [
        {
          name: `En ${client.guilds.cache.size} servidores`,
          type: ActivityType.Watching,
        },
      ],
    }); 
      loadCommands(client);
    },
  }; 
