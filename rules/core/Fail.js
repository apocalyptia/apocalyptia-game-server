const Rule = require('../../classes/Rule.js')

const Fail = new Rule({
	name: `Fail`,
	desc: [
		`Your roll is a Fail when the Result is less than the Difficulty.`,
	]
})

module.exports = Fail