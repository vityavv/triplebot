module.exports = function(message, substring) {
	var result = Math.floor(Math.random()*2);
	var messagetosend = `You flipped a coin and got ${["heads", "tails"][result]}.`;
	if (message.content.substring(substring)) {
		theirchoice = ["h", "t"].indexOf(message.content.toLowerCase().substring(substring, substring+1));
		if (["h", "t"].indexOf(message.content.toLowerCase().substring(substring, substring+1)) == result) {
			messagetosend += ` You won!`;
		} else {
			messagetosend += ` You lost.`;
		}
	}
	message.channel.send(messagetosend, {file: ["images/heads.jpg", "images/tails.jpg"][result]});
}
