import Gear from '../../../classes/Gear.mjs'
import OneHanded from '../attributes/OneHanded.mjs'
import Blunt from '../attributes/Blunt.mjs'
import Shield from '../attributes/Shield.mjs'

const RiotShield = new Gear({
	name: `Riot Shield`,
	type: `Melee Weapon`,
	sz: 4,
	attr: [
		OneHanded,
		Blunt,
		Shield,
	]
})
RiotShield.dmg = 0
RiotShield.rng = 1

export default RiotShield