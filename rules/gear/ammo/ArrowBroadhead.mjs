import Gear from '../../../classes/Gear.mjs'
import Broadhead from '../attributes/Broadhead.mjs'
import Pierce from '../attributes/Pierce.mjs'

const ArrowBroadhead = new Gear({
	name: `Broadhead Arrow`,
	type: `Ammo`,
	desc: [
		`Hunting arrow.`,
	],
	sz: 0.1,
	attr: [
		Broadhead,
		Pierce,
	],
})
ArrowBroadhead.cal = `Arrow`

export default ArrowBroadhead