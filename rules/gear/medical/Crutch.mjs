import Gear from '../../../classes/Gear.mjs'

const Crutch = new Gear({
	name: `Crutch`,
	type: `Medical`,
	desc: [
		`Halves Leg Damage Pain penalty to Speed.`,
	],
	sz: 3
})

export default Crutch