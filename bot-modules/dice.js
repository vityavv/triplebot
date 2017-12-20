module.exports = function(message, substring) {
	var files = [];
	var total = 0;
	var number = Number(message.content.substring(substring)) || 1;
	message.channel.send(`Rolling ${number} dice`);
	for (var i = 0; i < number; i++) {
		var result = Math.floor(Math.random()*6);
		total += result + 1;
		console.log(`Result: ${result}. Total: ${total}`);
		files.push(["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"][result]);
	}
	files = files.map((file, index) => ({ attachment: file, name: `roll${index}.png` }));
	message.channel.send({files});
	message.channel.send(`Total: ${total}.`);
}
