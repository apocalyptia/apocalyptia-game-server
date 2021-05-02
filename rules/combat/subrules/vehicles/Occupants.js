const Rule = require('../../classes/Rule.js')

const Occupants = new Rule({
	name: `Occupants`, 
	desc: [
		`Passengers in a moving vehicle are Unstable.`,
		`A vehicle provides Cover from Projectile Attacks with its Absorption.`,
	]
})

module.exports = Occupants