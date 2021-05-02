const Gear = require('../../../classes/Gear.js')
const Match = require('../attributes/Match.js')

const Match22 = new Gear({
	name: `.22 Match`,
	type: `Ammo`,
	desc: [
		`Competition-grade ammunition.`,
	],
	sz: 0.005,
	attr: [
		Match,
	],
})
Match22.cal = `.22`

module.exports = Match22