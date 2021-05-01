import Gear from '../../../classes/Gear.mjs'
import TwoHanded from '../attributes/TwoHanded.mjs'
import Blunt from '../attributes/Blunt.mjs'
import Slow from '../attributes/Slow.mjs'

const Sledgehammer = new Gear({
	name: `Sledgehammer`,
	type: `Melee Weapon`,
	sz: 5,
	attr: [
		TwoHanded,
		Blunt,
		Slow,
	]
})
Sledgehammer.dmg = 4
Sledgehammer.rng = 2

export default Sledgehammer