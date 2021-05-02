const Rule = require('../../classes/Rule.js')

const Pedestrians = new Rule({
	name: `Pedestrians`, 
	desc: [
		`Hitting a pedestrian does Damage = [vehicle Absorption].`,
		`-1 Absorption after hitting pedestrians = [vehicle Absorption].`,
	]
})

module.exports = Pedestrians