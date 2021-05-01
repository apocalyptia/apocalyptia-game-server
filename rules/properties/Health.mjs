import Property from '../../classes/Property.mjs'

const Health = new Property({
	name: `Health`,
	desc: [
		`Head, Arm, and Leg Health = Constitution`,
		`Torso Health = Constitution x 2`,
		`Health is a measure of how much Damage your body can withstand.`,
	],
	formula: [],
	type: `Property`
})
Health.locations = [
	`Head`,
	`Right Arm`,
	`Left Arm`,
	`Torso`,
	`Left Leg`,
	`Right Leg`
]

export default Health