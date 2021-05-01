import Gear from '../../../classes/Gear.mjs'
import TwoHanded from '../attributes/TwoHanded.mjs'
import Rapid from '../attributes/Rapid.mjs'

const NorincoSKS = new Gear({
	name: `Norinco SKS Rifle`,
	type: `Projectile Weapon`,
	sz: 4,
	attr: [
		TwoHanded,
		Rapid,
	]
})
NorincoSKS.dmg = 4
NorincoSKS.rng = 50
NorincoSKS.cap = 10
NorincoSKS.cal = `7.62`

export default NorincoSKS