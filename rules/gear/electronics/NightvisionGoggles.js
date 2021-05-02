const Gear = require('../../../classes/Gear.js')

const NightvisionGoggles = new Gear({
	name: `Nightvision Goggles`,
	type: `Electronics`,
	desc: [
		`Ignore Visibility penalties in darkness.`,
	],
	sz: 1
})
NightvisionGoggles.dur = 43200

module.exports = NightvisionGoggles