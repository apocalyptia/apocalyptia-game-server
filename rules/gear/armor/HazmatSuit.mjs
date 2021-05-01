import Gear from '../../../classes/Gear.mjs'
import Impermeable from '../../gear/attributes/Impermeable.mjs'
import Mask from '../../gear/attributes/Mask.mjs'

const HazmatSuit = new Gear({
	name: `Hazmat Suit`,
	sz: 2,
	attr: [
		Impermeable,
		Mask,
	],
	type: `Armor`
})
HazmatSuit.dr = 0
HazmatSuit.loc = `Full Body`

export default HazmatSuit