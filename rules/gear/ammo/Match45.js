const Gear = require('../../../classes/Gear.js')
const Match = require('../attributes/Match.js')

const Match45 = new Gear({
	name: `.45 Match`,
	type: `Ammo`,
	desc: [
		`Competition-grade ammunition.`,
	],
	sz: 0.01,
	attr: [
		Match,
	]
})
Match45.cal = `.45`

module.exports = Match45