const Gear = require('../../../classes/Gear.js')
const Match = require('../attributes/Match.js')

const Match308 = new Gear({
	name: `.308 Match`,
	type: `Ammo`,
	desc: [
		`Competition-grade ammunition.`,
	],
	sz: 0.02,
	attr: [
		Match,
	]
})
Match308.cal = `.308`

module.exports = Match308