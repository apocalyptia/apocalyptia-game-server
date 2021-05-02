const Gear = require('../../../classes/Gear.js')
const Blind = require('../../status/Blind.js')
const Stun = require('../../status/Stun.js')
const Asphyxiation = require('../../needs/Asphyxiation.js')

const TeargasGrenade = new Gear({
	name: `Teargas Grenade`,
	type: `Bomb`,
	desc: [
		`Chemical irritant grenade.`,
	],
	sz: 1,
	attr: [
		Blind,
		Stun,
		Asphyxiation,
	]
})
TeargasGrenade.dmg = 1
TeargasGrenade.rng = `1yd/rnd`
TeargasGrenade.fuse = 2
TeargasGrenade.dur = `1d6mins`
TeargasGrenade.mix = 15

module.exports = TeargasGrenade