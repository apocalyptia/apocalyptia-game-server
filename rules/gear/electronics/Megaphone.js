const Gear = require('../../../classes/Gear.js')

const Megaphone = new Gear({
	name: `Megaphone`,
	type: `Electronics`,
	desc: [
		`+1 Leadership when speaking to a crowd.`,
	],
	sz: 2
})
Megaphone.dur = 14400

module.exports = Megaphone