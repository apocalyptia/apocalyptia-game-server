const Gear = require('../../../classes/Gear.js')
const FireResistance = require('../../gear/attributes/FireResistance.js')
const Mask = require('../../gear/attributes/Mask.js')

const MotorcycleHelmet = new Gear({
	name: `Motorcycle Helmet`,
	sz: 2,
	attr: [
		FireResistance,
		Mask,
	],
	type: `Armor`
})
MotorcycleHelmet.dr = 1
MotorcycleHelmet.loc = `Head`

module.exports = MotorcycleHelmet