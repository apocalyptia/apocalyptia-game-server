const Asphyxiation = require('./needs/Asphyxiation.js')
const Dehydration = require('./needs/Dehydration.js')
const Exhaustion = require('./needs/Exhaustion.js')
const Hypothermia = require('./needs/Hypothermia.js')
const Starvation = require('./needs/Starvation.js')

const Needs = {
	asphyxiation: Asphyxiation,
	dehydration: Dehydration,
	exhaustion: Exhaustion,
	hypothermia: Hypothermia,
	starvation: Starvation
}

module.exports = Needs