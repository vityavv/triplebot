var Discord = require("discord.js");
var client = new Discord.Client();
var rps = require("./bot-modules/rps.js");

client.on("message", parseMessage);
client.login(process.env.TOKEN);

function parseMessage(message) {
	if (message.content.toLowerCase().substring(0, 4) == "[rps") {
		rps(message, 5);
	}
}
