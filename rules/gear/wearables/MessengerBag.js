const Gear = require('../../../classes/Gear.js')

const MessengerBag = new Gear({
	name: `Messenger Bag`,
	desc: [
		`1 round to access.`,
	],
	sz: 1
})
MessengerBag.slots = 4

module.exports = MessengerBag