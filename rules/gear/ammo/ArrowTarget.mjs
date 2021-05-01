import Gear from '../../../classes/Gear.mjs'

const ArrowTarget = new Gear({
	name: `Target Arrow`,
	type: `Ammo`,
	desc: [
		`Practice arrow.`,
	],
	sz: 0.1
})
ArrowTarget.cal = `Arrow`

export default ArrowTarget