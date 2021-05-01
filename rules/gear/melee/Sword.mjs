import Gear from '../../../classes/Gear.mjs'
import TwoHanded from '../attributes/TwoHanded.mjs'

const Sword = new Gear({
	name: `Sword`,
	type: `Melee Weapon`,
	sz: 3,
	attr: [
		TwoHanded,
	]
})
Sword.dmg = 4
Sword.rng = 2

export default Sword