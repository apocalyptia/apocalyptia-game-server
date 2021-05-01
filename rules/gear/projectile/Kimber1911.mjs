import Gear from '../../../classes/Gear.mjs'
import TwoHanded from '../attributes/TwoHanded.mjs'
import Rapid from '../attributes/Rapid.mjs'

const Kimber1911 = new Gear({
	name: `Kimber 1911 Pistol`,
	type: `Projectile Weapon`,
	sz: 1,
	attr: [
		TwoHanded,
		Rapid,
	]
})
Kimber1911.dmg = 1
Kimber1911.rng = 15
Kimber1911.cap = 7
Kimber1911.cal = `.45`

export default Kimber1911