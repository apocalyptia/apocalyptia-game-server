const Gear = require('../../../classes/Gear.js')
const Scatter = require('../attributes/Scatter.js')

const Buckshot12g = new Gear({
	name: `12g Buckshot`,
	type: `Ammo`,
	desc: [
		`Scatter-shot ammunition.`,
	],
	sz: 0.05,
	attr: [
		Scatter,
	]
})
Buckshot12g.cal = `12g`

module.exports = Buckshot12g