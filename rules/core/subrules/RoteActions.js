const Rule = require('../../../classes/Rule.js')

const RoteActions = new Rule({
	name: `Rote Actions`,
	desc: [
		`If the roll is unopposed and your [(Score + Modifiers) >= #] before the roll and you can take your time, you Succeed automatically.`,
	]
})

module.exports = RoteActions