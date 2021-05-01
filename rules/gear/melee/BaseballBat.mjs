import Gear from '../../../classes/Gear.mjs'
import TwoHanded from '../attributes/TwoHanded.mjs'
import Blunt from '../attributes/Blunt.mjs'

const BaseballBat = new Gear({
	name: `Baseball Bat`,
	type: `Melee Weapon`,
	sz: 3,
	attr: [
		TwoHanded,
		Blunt,
	]
})
BaseballBat.dmg = 3
BaseballBat.rng = 2

export default BaseballBat