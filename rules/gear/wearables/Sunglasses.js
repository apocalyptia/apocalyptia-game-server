const Gear = require('../../../classes/Gear.js')

const Sunglasses = new Gear({
	name: `Sunglasses`,
	desc: [
		`No Visibility(Sun) penalty.`,
		`+1 Constitution vs light.`,
	],
	sz: 0
})

module.exports = Sunglasses