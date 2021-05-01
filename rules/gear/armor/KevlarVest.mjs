import Gear from '../../../classes/Gear.mjs'
import ColdResistance from '../../gear/attributes/ColdResistance.mjs'
import FireResistance from '../../gear/attributes/FireResistance.mjs'

const KevlarVest = new Gear({
	name: `Kevlar Vest`,
	sz: 3,
	attr: [
		ColdResistance,
		FireResistance,
	],
	type: `Armor`
})
KevlarVest.dr = 2
KevlarVest.loc = `Torso`

export default KevlarVest