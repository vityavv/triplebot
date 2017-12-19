var Discord = require("discord.js");
var client = new Discord.Client();
var rps = require("./bot-modules/rps.js");
var coinflip = require("./bot-modules/coin.js");
var diceroll = require("./bot-modules/dice.js");

client.on("message", parseMessage);
client.login(process.env.TOKEN);

var embed = {
	"title": "TripleBot Help Guide",
	"description": "The help guide for TripleBot. Suggestions and bug fixes go to [the TripleBot GitHub](https://github.com/vityavv/triplebot)",
	"color": 65535,
	"footer": {
		"text": "Made by Victor Veytsman"
	},
	"fields": [
		{
			"name": "Fun Commands",
			"value": ">> **[rps** - Plays Rock, Paper, Scissors with you! Example: `[rps rock`\n>> **[coin** - Flips a coin for you! Example: `[coin` or `[coin heads`"
		},
		{
			"name": "Useful Commands",
			"value": ">> **[help** - This help menu!\n>> **[question**, **[q**, **[calc**, **[define** - Ask any question imaginable and have [Wolfram|Alpha](https://www.wolframalpha.com/) answer it for you!"
		}
	]
};

function parseMessage(message) {
	if (message.content.toLowerCase().startsWith("[help")) {
		message.channel.send({embed});
	}
	if (message.content.toLowerCase().startsWith("[rps")) {
		rps(message, 5);
	}
	if (message.content.toLowerCase().startsWith("[coin")) {
		coinflip(message, 6);
	}
	if (message.content.toLowerCase().startsWith("[dice")) {
		diceroll(message, 6);
	}
}
