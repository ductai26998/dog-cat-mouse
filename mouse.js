var chalk = require('chalk');

function mouse(name) {
	this.stomatch = [];
	this.name = name;
}
mouse.prototype.sayNo = function() {
	console.log("i'm " + chalk.green(this.name) + ". Don't eat me !!!!!!!");
};
module.exports = mouse;