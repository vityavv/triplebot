module.exports = function(message, substring) {
	var files = [];
	var total = 0;
	var number = Number(message.content.substring(substring)) || 1;
	for (var i = 0; i <= number; i++) {
		var result = Math.floor(Math.random()*6);
		total += result;
		files.push(["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"][result]);
	}
	console.log(files);
	message.channel.send({files});
	message.channel.send(`Total: ${total}. WARNING: The dice function is broken. The total is correct, but not all of the dice images will show up`);
}
