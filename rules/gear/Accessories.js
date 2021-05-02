const Bayonet = require('./accessories/Bayonet.js')
const Bipod = require('./accessories/Bipod.js')
const DrumMagazine = require('./accessories/DrumMagazine.js')
const Foregrip = require('./accessories/Foregrip.js')
const Holosight = require('./accessories/Holosight.js')
const Laser = require('./accessories/Laser.js')
const Scope = require('./accessories/Scope.js')
const SinglePointSling = require('./accessories/SinglePointSling.js')
const Suppressor = require('./accessories/Suppressor.js')

const Accessories = {
	bayonet: Bayonet,
	bipod: Bipod,
	drummagazine: DrumMagazine,
	foregrip: Foregrip,
	holosight: Holosight,
	laser: Laser,
	scope: Scope,
	singlepointsling: SinglePointSling,
	suppressor: Suppressor
}

module.exports = Accessories