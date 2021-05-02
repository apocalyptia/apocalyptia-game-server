const Rule = require('../../classes/Rule.js')

const Communication = new Rule({
	name: `Communication`, 
	desc: [
		`You can speak or shout up to 6 words per round.`,
	]
})

module.exports = Communication