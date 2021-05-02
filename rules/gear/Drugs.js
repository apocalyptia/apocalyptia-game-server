const Alcohol = require('./drugs/Alcohol.js')
const Antibiotic = require('./drugs/Antibiotic.js')
const Hallucinogen = require('./drugs/Hallucinogen.js')
const Painkiller = require('./drugs/Painkiller.js')
const Sedative = require('./drugs/Sedative.js')
const Stimulant = require('./drugs/Stimulant.js')

const Drugs = {
	alcohol: Alcohol,
	antibiotic: Antibiotic,
	hallucinogen: Hallucinogen,
	painkiller: Painkiller,
	sedative: Sedative,
	stimulant: Stimulant
}

module.exports = Drugs