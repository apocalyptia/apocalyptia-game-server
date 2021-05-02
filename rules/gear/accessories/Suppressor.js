const Gear = require('../../../classes/Gear.js')

const Suppressor = new Gear({
	name: `Suppressor`,
	type: `Accessory`,
	desc: [
		`Firing a Gun does not break Concealment.`,
	],
	sz: 1
})

module.exports = Suppressor