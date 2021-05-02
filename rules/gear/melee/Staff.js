const Gear = require('../../../classes/Gear.js')
const TwoHanded = require('../attributes/TwoHanded.js')
const Blunt = require('../attributes/Blunt.js')

const Staff = new Gear({
	name: `Staff`,
	type: `Melee Weapon`,
	sz: 3,
	attr: [
		TwoHanded,
		Blunt,
	]
})
Staff.dmg = 2
Staff.rng = 3

module.exports = Staff