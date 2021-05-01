import Gear from '../../../classes/Gear.mjs'
import ColdResistance from '../../gear/attributes/ColdResistance.mjs'
import FireResistance from '../../gear/attributes/FireResistance.mjs'

const HikingBoots = new Gear({
	name: `Hiking Boots`,
	sz: 2,
	attr: [
		ColdResistance,
		FireResistance,
	],
	type: `Armor`
})
HikingBoots.dr = 1
HikingBoots.loc = `Legs`

export default HikingBoots