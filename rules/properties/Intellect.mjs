import Property from '../../classes/Property.mjs'

const Intellect = new Property({
	name: `Intellect`,
	desc: [
		`Intellect = (Brains + Demeanor) / 2`,
		`Intellect is the amount of XP that is earned automatically for each game session that you survive.`,
	],
	formula: ['brains', 'demeanor'],
	type: `Property`
})

export default Intellect