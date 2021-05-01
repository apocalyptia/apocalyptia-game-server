import Gear from '../../../classes/Gear.mjs'

const Water = new Gear({
	name: `Water`,
	type: `Resource`,
	desc: [
		`1 unit Needed per day to prevent Dehydration.`,
	],
	sz: 1
})

export default Water