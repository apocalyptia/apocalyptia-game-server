const Gear = require('../../../classes/Gear.js')
const OneHanded = require('../attributes/OneHanded.js')
const Blunt = require('../attributes/Blunt.js')
const Shield = require('../attributes/Shield.js')

const RiotShield = new Gear({
	name: `Riot Shield`,
	type: `Melee Weapon`,
	sz: 4,
	attr: [
		OneHanded,
		Blunt,
		Shield,
	]
})
RiotShield.dmg = 0
RiotShield.rng = 1

module.exports = RiotShield