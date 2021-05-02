const Gear = require('../../../classes/Gear.js')
const FireResistance = require('../../gear/attributes/FireResistance.js')

const WorkGloves = new Gear({
	name: `Work Gloves`,
	sz: 0,
	attr: [
		FireResistance,
	],
	type: `Armor`
})
WorkGloves.dr = 1
WorkGloves.loc = `Arms`

module.exports = WorkGloves