const Gear = require('../../../classes/Gear.js')
const Camo = require('../../gear/attributes/Camo.js')

const FlakJacket = new Gear({
	name: `Flak Jacket`,
	sz: 3,
	attr: [
		Camo,
	],
	type: `Armor`
})
FlakJacket.dr = 2
FlakJacket.loc = `Torso`

module.exports = FlakJacket