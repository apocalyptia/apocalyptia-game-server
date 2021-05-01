import Gear from '../../../classes/Gear.mjs'
import Camo from '../../gear/attributes/Camo.mjs'
import FireResistance from '../../gear/attributes/FireResistance.mjs'

const CombatHelmet = new Gear({
	name: `Combat Helmet`,
	sz: 2,
	attr: [
		Camo,
		FireResistance,
	],
	type: `Armor`
})
CombatHelmet.dr = 2
CombatHelmet.loc = `Head`

export default CombatHelmet