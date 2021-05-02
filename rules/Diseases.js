const Cholera = require('./diseases/Cholera.js')
const HemorrhagicFever = require('./diseases/HemorrhagicFever.js')
const Influenza = require('./diseases/Influenza.js')
const MRSA = require('./diseases/MRSA.js')
const Rabies = require('./diseases/Rabies.js')
const Smallpox = require('./diseases/Smallpox.js')

const Diseases = {
	cholera: Cholera,
	hemorrhagicfever: HemorrhagicFever,
	influenza: Influenza,
	mrsa: MRSA,
	rabies: Rabies,
	smallpox: Smallpox
}

module.exports = Diseases