const Gear = require('../../../classes/Gear.js')

const LeatherJacket = new Gear({
	name: `Leather Jacket`,
	sz: 2,
	type: `Armor`
})
LeatherJacket.dr = 1
LeatherJacket.loc = `Arms, Torso`

module.exports = LeatherJacket