import Gear from '../../../classes/Gear.mjs'

const Backpack = new Gear({
	name: `Backpack`,
	desc: [
		`2 rounds to access.`,
	],
	sz: 1
})
Backpack.slots = 30

export default Backpack