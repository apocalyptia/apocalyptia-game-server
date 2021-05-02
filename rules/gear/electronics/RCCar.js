const Gear = require('../../../classes/Gear.js')

const RCCar = new Gear({
	name: `RC Car`,
	type: `Electronics`,
	desc: [
		`Science 3# to use.`,
		`45yd Speed.`,
	],
	sz: 3
})
RCCar.dur = 600

module.exports = RCCar