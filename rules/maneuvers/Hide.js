const Rule = require('../../classes/Rule.js')

const Hide = new Rule({
	name: `Hide`, 
	desc: [
		`Roll [Stealth vs Perception] to be Concealed.`,
		`Your Speed is 0.`,
		`+3 Stealth if Prone.`,
	],
	type: `Defensive`
})

module.exports = Hide