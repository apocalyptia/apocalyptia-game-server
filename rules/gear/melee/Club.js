const Gear = require('../../../classes/Gear.js')
const OneHanded = require('../attributes/OneHanded.js')
const Blunt = require('../attributes/Blunt.js')

const Club = new Gear({
	name: `Club`,
	type: `Melee Weapon`,
	sz: 2,
	attr: [
		OneHanded,
		Blunt,
	]
})
Club.dmg = 2
Club.rng = 2

module.exports = Club