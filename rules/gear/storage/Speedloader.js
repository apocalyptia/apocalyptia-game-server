const Gear = require('../../../classes/Gear.js')

const Speedloader = new Gear({
	name: `Speed-loader`,
	desc: [
		`Reload a revolver cylinder as 1 action.`,
	],
	sz: 0
})
Speedloader.slots = 0

module.exports = Speedloader