const Gear = require('../../../classes/Gear.js')

const GunCleaningKit = new Gear({
	name: `Gun Cleaning Kit`,
	desc: [
		`Gun gets +1 Projectile for 1 day.`,
		`Takes 1hr/gun.`,
	],
	sz: 1
})

module.exports = GunCleaningKit