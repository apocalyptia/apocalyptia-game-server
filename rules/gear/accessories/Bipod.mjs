import Gear from '../../../classes/Gear.mjs'

const Bipod = new Gear({
	name: `Bipod`,
	type: `Accessory`,
	desc: [
		`Ignore Size requirement.`,
		`1 round setup.`,
	],
	sz: 1
})

export default Bipod