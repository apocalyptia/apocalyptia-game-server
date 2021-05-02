const Chemicals = require('./resources/Chemicals.js')
const Food = require('./resources/Food.js')
const Fuel = require('./resources/Fuel.js')
const Parts = require('./resources/Parts.js')
const Water = require('./resources/Water.js')

const Resources = {
	chemicals: Chemicals,
	food: Food,
	fuel: Fuel,
	parts: Parts,
	water: Water
}

module.exports = Resources