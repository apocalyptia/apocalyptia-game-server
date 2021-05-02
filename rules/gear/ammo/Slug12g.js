const Gear = require('../../../classes/Gear.js')
const Slug = require('../attributes/Slug.js')

const Slug12g = new Gear({
	name: `12g Slug`,
	type: `Ammo`,
	desc: [
		`Single-projectile ammunition.`,
	],
	sz: 0.05,
	attr: [
		Slug,
	]
})
Slug12g.cal = `12g`

module.exports = Slug12g