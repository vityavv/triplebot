var Discord = require("discord.js");
var client = new Discord.Client();

client.on("message", parseMessage);
client.login(process.env.TOKEN);

function parseMessage(message) {
	if (message.content.toLowerCase().substring(0, 5) == "[rps ") {
		var rps = ["r", "p", "s"];
		var rpsfull = ["rock", "paper", "scissors"];
		var mychoice = Math.floor(Math.random()*3);
		var theirchoice = rps.indexOf(message.content.toLowerCase().substring(5, 6));
		var wonlost;
		if (theirchoice > -1) {
			if (mychoice > theirchoice) {
				if (mychoice-theirchoice == 1) {
					wonlost = "I won!";
				} else {
					wonlost = "I lost :(";
				}
			} else if (mychoice < theirchoice) {
				if (theirchoice-mychoice == 1) {
					wonlost = "I lost";
				} else {
					wonlost = "I won";
				}
			} else {
				wonlost = "we tied.";
			}
			message.channel.send(`I chose **${rpsfull[mychoice]}** and ${wonlost}`);
		} else {
			message.channel.send("You chose an invalid option. Try again with anything starting with r, p, or s");
		}
	}
}
