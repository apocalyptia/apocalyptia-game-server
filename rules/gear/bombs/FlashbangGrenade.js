const Gear = require('../../../classes/Gear.js')
const Blind = require('../../status/Blind.js')
const Stun = require('../../status/Stun.js')

const FlashbangGrenade = new Gear({
	name: `Flashbang Grenade`,
	type: `Bomb`,
	desc: [
		`Stun grenade.`,
	],
	sz: 1,
	attr: [
		Blind,
		Stun,
	]
})
FlashbangGrenade.dmg = 0
FlashbangGrenade.rng = 6
FlashbangGrenade.fuse = 2
FlashbangGrenade.dur = `1d6`
FlashbangGrenade.mix = 9

module.exports = FlashbangGrenade