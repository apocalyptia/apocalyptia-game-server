const Gear = require('../../../classes/Gear.js')
const Pierce = require('../attributes/Pierce.js')

const ArmorPiercing308 = new Gear({
	name: `.308 Armor Piercing`,
	type: `Ammo`,
	desc: [
		`Battlefield ammunition.`,
	],
	sz: 0.02,
	attr: [
		Pierce,
	]
})
ArmorPiercing308.cal = `.308`

module.exports = ArmorPiercing308