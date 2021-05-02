const Gear = require('../../../classes/Gear.js')

const DrumMagazine = new Gear({
	name: `Drum Magazine`,
	type: `Accessory`,
	desc: [
		`Gun specific.`,
		`3x Ammo magazine capacity.`,
	],
	sz: 1
})

module.exports = DrumMagazine