import Gear from '../../../classes/Gear.mjs'
import TwoHanded from '../attributes/TwoHanded.mjs'
import Auto from '../attributes/Auto.mjs'
import Rapid from '../attributes/Rapid.mjs'

const MAC10 = new Gear({
	name: `MAC-10 SMG`,
	type: `Projectile Weapon`,
	sz: 2,
	attr: [
		TwoHanded,
		Auto,
		Rapid,
	]
})
MAC10.dmg = 1
MAC10.rng = 20
MAC10.cap = 30
MAC10.cal = `.45`

export default MAC10