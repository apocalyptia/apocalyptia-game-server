const Gear = require('../../../classes/Gear.js')
const Match = require('../attributes/Match.js')

const Match9mm = new Gear({
	name: `9mm Match`,
	type: `Ammo`,
	desc: [
		`Competition-grade ammunition.`,
	],
	sz: 0.01,
	attr: [
		Match,
	]
})
Match9mm.cal = `9mm`

module.exports = Match9mm