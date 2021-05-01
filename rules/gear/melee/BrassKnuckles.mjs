import Gear from '../../../classes/Gear.mjs'
import OneHanded from '../attributes/OneHanded.mjs'
import Blunt from '../attributes/Blunt.mjs'

const BrassKnuckles = new Gear({
	name: `Brass Knuckles`,
	type: `Melee Weapon`,
	sz: 1,
	attr: [
		OneHanded,
		Blunt,
	]
})
BrassKnuckles.dmg = 1
BrassKnuckles.rng = 1

export default BrassKnuckles