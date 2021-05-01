import Gear from '../../../classes/Gear.mjs'
import TwoHanded from '../attributes/TwoHanded.mjs'

const BarnettCrossbow = new Gear({
	name: `Barnett Crossbow`,
	type: `Projectile Weapon`,
	sz: 3,
	attr: [
		TwoHanded,
	]
})
BarnettCrossbow.dmg = 3
BarnettCrossbow.rng = 15
BarnettCrossbow.cap = 1
BarnettCrossbow.cal = `Arrow`

export default BarnettCrossbow