const Discord = require("discord.js");
const config = require("./config.json");
const client = Discord.Client()

client.on("ready", () => {

    console.log("Ready!")




});



client.on("message", message => { // When the bot spots a message

    if (message.author.bot) return; // Doesn't respond to bots

    if (message.content.indexOf(config.prefix) !== 0) return; // Only responding to existing commands that start with "!"

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g); // Configure arguments for the commands
    const command = args.shift().toLowerCase(); // Detect existing commands

    //Commands
    if (command === "ping") { // "!ping"
        message.channel.send('Pong!'); // Send a message saying "Pong!"
    }
});
