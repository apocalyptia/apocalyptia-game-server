const Gear = require('../../../classes/Gear.js')
const OneHanded = require('../attributes/OneHanded.js')

const Crowbar = new Gear({
	name: `Crowbar`,
	type: `Melee Weapon`,
	sz: 3,
	attr: [
		OneHanded,
	]
})
Crowbar.dmg = 3
Crowbar.rng = 2

module.exports = Crowbar