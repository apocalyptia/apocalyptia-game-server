const Gear = require('../../../classes/Gear.js')

const PersonalDefense = new Gear({
	name: `Personal Defense`,
	desc: [
		`+1 Projectile`,
	],
	sz: 1,
	type: `Document`
})

module.exports = PersonalDefense