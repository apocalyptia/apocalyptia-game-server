import Gear from '../../../classes/Gear.mjs'
import ColdResistance from '../../gear/attributes/ColdResistance.mjs'
import FireResistance from '../../gear/attributes/FireResistance.mjs'
import Mask from '../../gear/attributes/Mask.mjs'

const FirefighterSuit = new Gear({
	name: `Firefighter Suit`,
	sz: 5,
	attr: [
		ColdResistance,
		FireResistance,
		Mask,
	],
	type: `Armor`
})
FirefighterSuit.dr = 1
FirefighterSuit.loc = `Full Body`

export default FirefighterSuit