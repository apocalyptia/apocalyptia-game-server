const Gear = require('../../../classes/Gear.js')
const Blind = require('../../status/Blind.js')

const SmokeGrenade = new Gear({
	name: `Smoke Grenade`,
	type: `Bomb`,
	desc: [
		`Visibility denial grenade.`,
	],
	sz: 1,
	attr: [
		Blind,
	]
})
SmokeGrenade.dmg = 0
SmokeGrenade.rng = `1yd/rnd`
SmokeGrenade.fuse = 2
SmokeGrenade.dur = `1d6mins`
SmokeGrenade.mix = 6

module.exports = SmokeGrenade