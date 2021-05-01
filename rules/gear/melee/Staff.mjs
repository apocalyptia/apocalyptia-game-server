import Gear from '../../../classes/Gear.mjs'
import TwoHanded from '../attributes/TwoHanded.mjs'
import Blunt from '../attributes/Blunt.mjs'

const Staff = new Gear({
	name: `Staff`,
	type: `Melee Weapon`,
	sz: 3,
	attr: [
		TwoHanded,
		Blunt,
	]
})
Staff.dmg = 2
Staff.rng = 3

export default Staff