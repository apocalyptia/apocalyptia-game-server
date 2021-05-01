import Gear from '../../../classes/Gear.mjs'
import Camo from '../../gear/attributes/Camo.mjs'
import ColdResistance from '../../gear/attributes/ColdResistance.mjs'
import FireResistance from '../../gear/attributes/FireResistance.mjs'

const PlateCarrier = new Gear({
	name: `Plate Carrier`,
	sz: 3,
	attr: [
		Camo,
		ColdResistance,
		FireResistance,
	],
	type: `Armor`
})
PlateCarrier.dr = 3
PlateCarrier.loc = `Torso`

export default PlateCarrier