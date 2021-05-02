const FlashbangGrenade = require('./bombs/FlashbangGrenade.js')
const FragGrenade = require('./bombs/FragGrenade.js')
const MolotovCocktail = require('./bombs/MolotovCocktail.js')
const SmokeGrenade = require('./bombs/SmokeGrenade.js')
const TeargasGrenade = require('./bombs/TeargasGrenade.js')
const Thermite = require('./bombs/Thermite.js')

const Bombs = {
	flashbandgrenade: FlashbangGrenade,
	fraggrenade: FragGrenade,
	molotovcocktail: MolotovCocktail,
	smokegrenade: SmokeGrenade,
	teargasgrenade: TeargasGrenade,
	thermite: Thermite
}

module.exports = Bombs