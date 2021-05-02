const Property = require('../../classes/Property.js')

const Discipline = new Property({
	name: `Discipline`,
	desc: [
		`Discipline = (Constitution + Demeanor) / 2.`,
		`This is the amount of Pain you can ignore before you start taking penalties.`
	],
	type: `Property`
})

module.exports = Discipline