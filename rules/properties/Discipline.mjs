import Property from '../../classes/Property.mjs'

const Discipline = new Property({
	name: `Discipline`,
	desc: [
		`Discipline = (Constitution + Demeanor) / 2.`,
		`This is the amount of Pain you can ignore before you start taking penalties.`
	],
	formula: ['constitution', 'demeanor'],
	type: `Property`
})

export default Discipline