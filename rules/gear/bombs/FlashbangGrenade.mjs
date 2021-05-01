import Gear from '../../../classes/Gear.mjs'
import Blind from '../../status/Blind.mjs'
import Stun from '../../status/Stun.mjs'

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

export default FlashbangGrenade