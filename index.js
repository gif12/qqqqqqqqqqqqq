
const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

// Create a new Discord client with all intents enabled
const client = new Client({
  intents: Object.values(Intents.FLAGS),
});

// Create a new Collection for the slash commands
client.commands = new Collection();

// Load all slash commands from the commands folder
const commandFiles = fs.readdirSync('./slash/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./slash/${file}`);
  client.commands.set(command.data.name, command);
  console.log(`Loaded command ${command.data.name}`);
}


// Set up the REST API connection
const token = '  ';
const clientId = '1110209254671003668';
const rest = new REST({ version: '9' }).setToken(token);

(async () => {
  try {
    // Register slash commands for all servers
const commands = client.commands.map(command => command.data);
    await rest.put(Routes.applicationGuildCommands(clientId, '1110208698850222142'), {
      body: commands
    });
    console.log('Successfully registered application commands!');
  } catch (error) {
    console.error(error);
  }
})();

// Event listener for ready event
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Event listener for interactionCreate event
client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) {
    return;
  }

  const commandName = interaction.commandName;
  const command = client.commands.get(commandName);

  if (!command) {
    return;
  }

  try {
    await command.execute(interaction);
} catch (error) {
    console.error(error);
    await interaction.reply({
      content: 'There was an error executing this command! Please try again later.',
      ephemeral: true
    });
  }
});

// Login to Discord with your bot's token
client.login(token);