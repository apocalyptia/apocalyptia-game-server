const Property = require('../../classes/Property.js')

const Health = new Property({
	name: `Health`,
	desc: [
		`Head, Arm, and Leg Health = Constitution`,
		`Torso Health = Constitution x 2`,
		`Health is a measure of how much Damage your body can withstand.`,
	],
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

module.exports = Health