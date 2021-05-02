const Gear = require('../../../classes/Gear.js')
const Blast = require('../attributes/Blast.js')
const FireDamage = require('../attributes/FireDamage.js')

const Thermite = new Gear({
	name: `Thermite`,
	type: `Bomb`,
	desc: [
		`High-temperature incendiary bomb.`,
	],
	sz: 1,
	attr: [
		Blast,
		FireDamage,
	]
})
Thermite.dmg = `6d6`
Thermite.rng = 1
Thermite.fuse = 2
Thermite.dur = 6
Thermite.mix = 6

module.exports = Thermite