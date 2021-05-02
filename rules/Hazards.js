const Burning = require('./hazards/Burning.js')
const Falling = require('./hazards/Falling.js')
const FriendlyFire = require('./hazards/FriendlyFire.js')
const Radiation = require('./hazards/Radiation.js')

const Hazards = {
	burning: Burning,
	falling: Falling,
	friendlyfire: FriendlyFire,
	radiation: Radiation
}

module.exports = Hazards