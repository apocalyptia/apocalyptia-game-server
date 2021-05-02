const Property = require('../../classes/Property.js')

const Deflection = new Property({
	name: `Deflection`,
	desc: [
		`Deflection = (Brains + Constitution) / 2.`,
		`This is your default Defense against Melee Attacks when you do not spend and Action to make a Melee(Block) roll.`
	],
	type: `Property`
})

module.exports = Deflection