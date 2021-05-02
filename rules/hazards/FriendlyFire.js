const Rule = require('../../classes/Rule.js')

const FriendlyFire = new Rule({
	name: `Friendly Fire`, 
	desc: [
		`-3 Projectile against targets within 1yd of your ally.`,
		`If the Projectile Attack Fails, re-roll the Projectile Attack vs the ally’s Reflexive Dodge.`,
	],
	type: `Hazard`
})

module.exports = FriendlyFire