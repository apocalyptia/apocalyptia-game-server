import Gear from '../../../classes/Gear.mjs'
import Camo from '../../gear/attributes/Camo.mjs'
import ColdResistance from '../../gear/attributes/ColdResistance.mjs'

const Coveralls = new Gear({
	name: `Coveralls`,
	sz: 3,
	attr: [
		Camo,
		ColdResistance,
	],
	type: `Armor`
})
Coveralls.dr = 1
Coveralls.loc = `Arms, Torso, Legs`

export default Coveralls