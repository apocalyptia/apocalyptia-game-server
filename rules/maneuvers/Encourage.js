const Rule = require('../../classes/Rule.js')

const Encourage = new Rule({
	name: `Encourage`,
	desc: [
		`Roll [Leadership vs groups’ total Demeanor scores].`,
		`The group gets a bonus = [your Demeanor] for one specific roll each.`,
		`A Botch is -1 to all rolls.`,
	],
	type: `Social`
})

module.exports = Encourage