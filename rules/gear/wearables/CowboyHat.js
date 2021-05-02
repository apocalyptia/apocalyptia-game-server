const Gear = require('../../../classes/Gear.js')

const CowboyHat = new Gear({
	name: `Cowboy Hat`,
	desc: [
		`Reduce Visibility(Rain and Sun) penalty by 3.`,
	],
	sz: 1
})

module.exports = CowboyHat