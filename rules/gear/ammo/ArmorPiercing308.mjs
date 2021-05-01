import Gear from '../../../classes/Gear.mjs'
import Pierce from '../attributes/Pierce.mjs'

const ArmorPiercing308 = new Gear({
	name: `.308 Armor Piercing`,
	type: `Ammo`,
	desc: [
		`Battlefield ammunition.`,
	],
	sz: 0.02,
	attr: [
		Pierce,
	]
})
ArmorPiercing308.cal = `.308`

export default ArmorPiercing308