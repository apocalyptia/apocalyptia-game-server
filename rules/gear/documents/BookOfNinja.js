const Gear = require('../../../classes/Gear.js')

const BookOfNinja = new Gear({
	name: `Book of Ninja`,
	desc: [
		`+1 Stealth`,
	],
	sz: 1,
	type: `Document`
})

module.exports = BookOfNinja