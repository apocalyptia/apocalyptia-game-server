const Gear = require('../../../classes/Gear.js')
const TwoHanded = require('../attributes/TwoHanded.js')

const RecurveBow = new Gear({
	name: `Recurve Bow`,
	type: `Projectile Weapon`,
	sz: 2,
	attr: [
		TwoHanded,
	]
})
RecurveBow.dmg = 1
RecurveBow.rng = 10
RecurveBow.cap = 1
RecurveBow.cal = `Arrow`

module.exports = RecurveBow