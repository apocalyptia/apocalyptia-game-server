const Gear = require('../../../classes/Gear.js')
const Blast = require('../attributes/Blast.js')
const Pierce = require('../attributes/Pierce.js')

const FragGrenade = new Gear({
	name: `Frag Grenade`,
	type: `Bomb`,
	desc: [
		`Explosive fragmentation grenade.`,
	],
	sz: 1,
	attr: [
		Blast,
		Pierce,
	]
})
FragGrenade.dmg = `3d6`
FragGrenade.rng = 15
FragGrenade.fuse = 2
FragGrenade.dur = 1
FragGrenade.mix = 9

module.exports = FragGrenade