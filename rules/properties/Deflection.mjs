import Property from '../../classes/Property.mjs'

const Deflection = new Property({
	name: `Deflection`,
	desc: [
		`Deflection = (Brains + Constitution) / 2.`,
		`This is your default Defense against Melee Attacks when you do not spend and Action to make a Melee(Block) roll.`
	],
	formula: ['brains', 'constitution'],
	type: `Property`
})

export default Deflection