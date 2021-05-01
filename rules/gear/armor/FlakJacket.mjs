import Gear from '../../../classes/Gear.mjs'
import Camo from '../../gear/attributes/Camo.mjs'

const FlakJacket = new Gear({
	name: `Flak Jacket`,
	sz: 3,
	attr: [
		Camo,
	],
	type: `Armor`
})
FlakJacket.dr = 2
FlakJacket.loc = `Torso`

export default FlakJacket