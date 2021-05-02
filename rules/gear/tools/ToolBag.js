const Gear = require('../../../classes/Gear.js')

const ToolBag = new Gear({
	name: `Tool Bag`,
	desc: [
		`+3 Build.`,
		`Pliers, wrenches, level, etc.`,
	],
	sz: 3
})

module.exports = ToolBag