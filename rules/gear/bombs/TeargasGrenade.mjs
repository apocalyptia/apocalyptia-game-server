import Gear from '../../../classes/Gear.mjs'
import Blind from '../../status/Blind.mjs'
import Stun from '../../status/Stun.mjs'
import Asphyxiation from '../../needs/Asphyxiation.mjs'

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

export default TeargasGrenade