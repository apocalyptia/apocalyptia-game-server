import Gear from '../../../classes/Gear.mjs'
import TwoHanded from '../attributes/TwoHanded.mjs'
import Rapid from '../attributes/Rapid.mjs'
import Scatter from '../attributes/Scatter.mjs'

const CZUpland = new Gear({
	name: `CZ Upland Shotgun`,
	type: `Projectile Weapon`,
	sz: 4,
	attr: [
		TwoHanded,
		Rapid,
		Scatter,
	]
})
CZUpland.dmg = 5
CZUpland.rng = 20
CZUpland.cap = 2
CZUpland.cal = `12g`

export default CZUpland