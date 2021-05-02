const Gear = require('../../../classes/Gear.js')
const OneHanded = require('../attributes/OneHanded.js')
const Chop = require('../attributes/Chop.js')

const Machete = new Gear({
	name: `Machete`,
	type: `Melee Weapon`,
	sz: 2,
	attr: [
		OneHanded,
		Chop,
	]
})
Machete.dmg = 3
Machete.rng = 2

module.exports = Machete