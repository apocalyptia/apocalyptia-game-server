const Gear = require('../../../classes/Gear.js')
const Pierce = require('../attributes/Pierce.js')

const ArmorPiercing556 = new Gear({
	name: `5.56mm Armor Piercing`,
	type: `Ammo`,
	desc: [
		`Battlefield ammunition.`,
	],
	sz: 0.02,
	attr: [
		Pierce,
	]
})
ArmorPiercing556.cal = `5.56`

module.exports = ArmorPiercing556