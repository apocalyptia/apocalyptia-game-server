const Rule = require('../../../classes/Rule.js')

const Pain = new Rule({
	name: `Pain`, 
	desc: [
		`Damage, Trauma, and a few other effects can cause Pain penalties.`,
		`Each point of Pain is a -1 penalty to all rolls and Speed.`,
		`Pain penalties fade away as you recover from whatever caused it.`,
		`You fall Prone if your Speed drops to 0 due to Pain penalties.`,
	]
})

module.exports = Pain