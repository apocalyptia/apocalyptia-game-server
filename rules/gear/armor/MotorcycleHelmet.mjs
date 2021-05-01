import Gear from '../../../classes/Gear.mjs'
import FireResistance from '../../gear/attributes/FireResistance.mjs'
import Mask from '../../gear/attributes/Mask.mjs'

const MotorcycleHelmet = new Gear({
	name: `Motorcycle Helmet`,
	sz: 2,
	attr: [
		FireResistance,
		Mask,
	],
	type: `Armor`
})
MotorcycleHelmet.dr = 1
MotorcycleHelmet.loc = `Head`

export default MotorcycleHelmet