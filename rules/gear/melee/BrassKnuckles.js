const Gear = require('../../../classes/Gear.js')
const OneHanded = require('../attributes/OneHanded.js')
const Blunt = require('../attributes/Blunt.js')

const BrassKnuckles = new Gear({
	name: `Brass Knuckles`,
	type: `Melee Weapon`,
	sz: 1,
	attr: [
		OneHanded,
		Blunt,
	]
})
BrassKnuckles.dmg = 1
BrassKnuckles.rng = 1

module.exports = BrassKnuckles