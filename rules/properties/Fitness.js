const Property = require('../../classes/Property.js')

const Fitness = new Property({
	name: `Fitness`,
	desc: [
		`Fitness = (Agility + Constitution) / 2`,
		`This is the rate at which Endurance is regained during rounds where you do not take any Actions.`,
	],
	type: `Property`
})

module.exports = Fitness