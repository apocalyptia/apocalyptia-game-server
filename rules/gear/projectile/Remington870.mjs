import Gear from '../../../classes/Gear.mjs'
import TwoHanded from '../attributes/TwoHanded.mjs'
import Scatter from '../attributes/Scatter.mjs'

const Remington870 = new Gear({
	name: `Remington 870 Shotgun`,
	type: `Projectile Weapon`,
	sz: 4,
	attr: [
		TwoHanded,
		Scatter,
	]
})
Remington870.dmg = 5
Remington870.rng = 15
Remington870.cap = 6
Remington870.cal = `12g`

export default Remington870