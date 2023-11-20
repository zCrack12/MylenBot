const { Client, Collection } = require("discord.js");
const client = new Client({ intents: [131071] });

const { loadEvents } = require('./Handlers/eventHandler');

client.config = require("./config.json");
client.events = new Collection();
client.commands = new Collection();

loadEvents(client);

client.login(client.config.token);
