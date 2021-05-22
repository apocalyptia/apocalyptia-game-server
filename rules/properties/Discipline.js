const Property = require('../../classes/Property.js')

const formula = `( Constitution + Demeanor ) / 2`

const Discipline = new Property({
	name: `Discipline`,
	formula: formula,
	desc: [
		`Discipline = ${formula}.`,
		`This is the amount of Pain you can ignore before you start taking penalties.`
	],
	type: `Property`
})

module.exports = Discipline