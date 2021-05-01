import Gear from '../../../classes/Gear.mjs'
import TwoHanded from '../attributes/TwoHanded.mjs'
import Scatter from '../attributes/Scatter.mjs'

const Mossberg500 = new Gear({
	name: `Mossberg 500 Shotgun`,
	type: `Projectile Weapon`,
	sz: 2,
	attr: [
		TwoHanded,
		Scatter,
	]
})
Mossberg500.dmg = 5
Mossberg500.rng = 10
Mossberg500.cap = 5
Mossberg500.cal = `12g`

export default Mossberg500