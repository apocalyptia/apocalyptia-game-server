const Gear = require('../../../classes/Gear.js')

const AthleticPads = new Gear({
	name: `Athletic Pads`,
	sz: 2,
	type: `Armor`
})
AthleticPads.dr = 1
AthleticPads.loc = `Torso`

module.exports = AthleticPads