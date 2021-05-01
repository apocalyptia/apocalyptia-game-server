import Gear from '../../../classes/Gear.mjs'
import OneHanded from '../attributes/OneHanded.mjs'
import Pierce from '../attributes/Pierce.mjs'
import Rapid from '../attributes/Rapid.mjs'

const Knife = new Gear({
	name: `Knife`,
	type: `Melee Weapon`,
	sz: 1,
	attr: [
		OneHanded,
		Pierce,
		Rapid,
	]
})
Knife.dmg = 1
Knife.rng = 1

export default Knife