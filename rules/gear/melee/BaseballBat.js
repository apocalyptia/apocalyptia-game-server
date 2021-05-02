const Gear = require('../../../classes/Gear.js')
const TwoHanded = require('../attributes/TwoHanded.js')
const Blunt = require('../attributes/Blunt.js')

const BaseballBat = new Gear({
	name: `Baseball Bat`,
	type: `Melee Weapon`,
	sz: 3,
	attr: [
		TwoHanded,
		Blunt,
	]
})
BaseballBat.dmg = 3
BaseballBat.rng = 2

module.exports = BaseballBat