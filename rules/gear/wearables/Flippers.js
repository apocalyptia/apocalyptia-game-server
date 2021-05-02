const Gear = require('../../../classes/Gear.js')

const Flippers = new Gear({
	name: `Flippers`,
	desc: [
		`+3 Athletics(Swim).`,
		`-6 walking Speed.`,
	],
	sz: 2
})

module.exports = Flippers