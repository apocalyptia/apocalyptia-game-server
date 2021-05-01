import Gear from '../../../classes/Gear.mjs'

const Stethoscope = new Gear({
	name: `Stethoscope`,
	type: `Medical`,
	desc: [
		`+1 Medicine.`,
		`Perception(Hear) 6# through doors.`,
	],
	sz: 0
})

export default Stethoscope