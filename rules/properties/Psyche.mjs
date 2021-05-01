import Property from '../../classes/Property.mjs'

const Psyche = new Property({
	name: `Psyche`,
	desc: [
		`Psyche = Demeanor x 3`,
		`Psyche is a measure of how much Trauma your mind can withstand.`,
	],
	formula: ['demeanor'],
	type: `Property`
})

export default Psyche