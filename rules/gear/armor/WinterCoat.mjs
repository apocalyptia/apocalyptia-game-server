import Gear from '../../../classes/Gear.mjs'
import ColdResistance from '../../gear/attributes/ColdResistance.mjs'

const WinterCoat = new Gear({
	name: `Winter Coat`,
	sz: 2,
	attr: [
		ColdResistance,
	],
	type: `Armor`
})
WinterCoat.dr = 1
WinterCoat.loc = `Arms, Torso`

export default WinterCoat