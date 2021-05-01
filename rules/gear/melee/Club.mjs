import Gear from '../../../classes/Gear.mjs'
import OneHanded from '../attributes/OneHanded.mjs'
import Blunt from '../attributes/Blunt.mjs'

const Club = new Gear({
	name: `Club`,
	type: `Melee Weapon`,
	sz: 2,
	attr: [
		OneHanded,
		Blunt,
	]
})
Club.dmg = 2
Club.rng = 2

export default Club