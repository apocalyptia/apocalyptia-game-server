import Gear from '../../../classes/Gear.mjs'
import TwoHanded from '../attributes/TwoHanded.mjs'
import Chop from '../attributes/Chop.mjs'
import Slow from '../attributes/Slow.mjs'

const Ax = new Gear({
	name: `Ax`,
	type: `Melee Weapon`,
	sz: 4,
	attr: [
		TwoHanded,
		Chop,
		Slow,
	]
})
Ax.dmg = 4
Ax.rng = 2

export default Ax