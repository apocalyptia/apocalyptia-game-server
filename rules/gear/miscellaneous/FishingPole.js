const Gear = require('../../../classes/Gear.js')

const FishingPole = new Gear({
	name: `Fishing Pole`,
	desc: [
		`+1 Survival(Forage) at river, lake, or ocean.`,
	],
	sz: 1
})

module.exports = FishingPole