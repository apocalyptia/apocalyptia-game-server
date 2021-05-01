import Gear from '../../../classes/Gear.mjs'

const EMTBag = new Gear({
	name: `EMT Bag`,
	type: `Medical`,
	desc: [
		`+3 Medicine(First-Aid).`,
		`30 uses.`,
	],
	sz: 5
})

export default EMTBag