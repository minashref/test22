const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("677695914948952072")
setInterval(function() {
channel.send(`mina mina mina mina mina mina mina mina mina`);
}, 30)
})

client.login(process.env.BOT_TOKEN);