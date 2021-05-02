const Rule = require('../../classes/Rule.js')

const Distract = new Rule({
	name: `Distract`,
	desc: [
		`Roll [Perform vs Perception].`,
		`Stun target for 1 round.`,
	],
	type: `Social`
})

module.exports = Distract