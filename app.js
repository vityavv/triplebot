var Discord = require("discord.js");
var client = new Discord.Client();

var rps = require("./bot-modules/rps.js");
var coinflip = require("./bot-modules/coin.js");
var diceroll = require("./bot-modules/dice.js");
var question = require("./bot-modules/question.js").question;
var shortq = require("./bot-modules/question.js").shortq;

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
			"value": ">> **[rps** - Plays Rock, Paper, Scissors with you! Example: `[rps rock`\n"+
			">> **[coin** - Flips a coin for you! Example: `[coin` or `[coin heads`"
		},
		{
			"name": "Useful Commands",
			"value": ">> **[help** - This help menu!\n"+
			">> **[question**, **[q**, **[define** - Ask any question imaginable and have [Wolfram|Alpha](https://www.wolframalpha.com/) answer it for you in image form! Example: `[q what is the net worth of Bill Gates?`\n"+
			">> **[calc**, **[shortq** - Ask any question imaginable and have [Wolfram|Alpha](https://www.wolframalpha.com/) answer it for you in *sentence* form! Warning: the sentences are super short so this is not suggested for non-math questions. See example above."
		}
	]
};

function parseMessage(message) {
	var content = message.content.toLowerCase();
	if (content.startsWith("[help")) {
		message.channel.send({embed});
	}
	if (content.startsWith("[rps")) {
		rps(message, 5);
	}
	if (content.startsWith("[coin")) {
		coinflip(message, 6);
	}
	if (content.startsWith("[dice")) {
		diceroll(message, 6);
	}

	if (content.startsWith("[question")) {
		question(message, 10);
	}
	if (content.startsWith("[q")) {
		question(message, 3);
	}
	if (content.startsWith("[define")) {
		question(message, 8);
	}

	if (content.startsWith("[calc")) {
		shortq(message, 6);
	}
	if (content.startsWith("[shortq")) {
		shortq(message, 8);
	}
}
