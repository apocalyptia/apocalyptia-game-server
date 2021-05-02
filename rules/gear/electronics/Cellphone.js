const Gear = require('../../../classes/Gear.js')

const Cellphone = new Gear({
	name: `Cellphone`,
	type: `Electronics`,
	desc: [
		`1yd light, camera, remote control.`,
	],
	sz: 0
})
Cellphone.dur = 3600

module.exports = Cellphone