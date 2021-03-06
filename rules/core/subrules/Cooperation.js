const Rule = require('../../../classes/Rule.js')

const Cooperation = new Rule({
	name: `Cooperation`,
	desc: [
		`If Characters want to help each other perform a task, one of them makes the roll and the rest add their Scores together as a Modifier to the main Character’s Result.`,
		`The Narrator should use their judgement to determine the time to completion.`,
	]
})

module.exports = Cooperation