import Gear from '../../../classes/Gear.mjs'
import TwoHanded from '../attributes/TwoHanded.mjs'

const ColtPython = new Gear({
	name: `Colt Python Revolver`,
	type: `Projectile Weapon`,
	sz: 1,
	attr: [
		TwoHanded,
	]
})
ColtPython.dmg = 2
ColtPython.rng = 10
ColtPython.cap = 6
ColtPython.cal = `.357`

export default ColtPython