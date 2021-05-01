import Gear from '../../../classes/Gear.mjs'

const Lockbox = new Gear({
	name: `Lockbox`,
	desc: [
		`2 Absorption.`,
		`Fire Resistance.`,
		`Larceny(Disable) 9#.`,
	],
	sz: 2
})
Lockbox.slots = 1

export default Lockbox