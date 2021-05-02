const Gear = require('../../../classes/Gear.js')

const MusicalInstrument = new Gear({
	name: `Musical Instrument`,
	desc: [
		`+1 Entertain(Distract and Inspire).`,
	],
	sz: 1
})

module.exports = MusicalInstrument