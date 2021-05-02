const Gear = require('../../../classes/Gear.js')

const Whetstone = new Gear({
	name: `Whetstone`,
	desc: [
		`Blade gets +1 Damage for 1day.`,
		`Takes 1hr/blade.`,
	],
	sz: 0
})

module.exports = Whetstone