import Gear from '../../../classes/Gear.mjs'
import TwoHanded from '../attributes/TwoHanded.mjs'

const SW686Snubnose = new Gear({
	name: `S&W 686 Snubnose Revolver`,
	type: `Projectile Weapon`,
	sz: 1,
	attr: [
		TwoHanded,
	]
})
SW686Snubnose.dmg = 2
SW686Snubnose.rng = 5
SW686Snubnose.cap = 5
SW686Snubnose.cal = `.357`

export default SW686Snubnose