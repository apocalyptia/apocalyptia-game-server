import Gear from '../../../classes/Gear.mjs'
import Camo from '../../gear/attributes/Camo.mjs'
import ColdResistance from '../../gear/attributes/ColdResistance.mjs'

const GhillieSuit = new Gear({
	name: `Ghillie Suit`,
	sz: 3,
	attr: [
		Camo,
		ColdResistance,
	],
	type: `Armor`
})
GhillieSuit.dr = 1
GhillieSuit.loc = `Full Body`

export default GhillieSuit