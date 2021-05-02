const Ability = require('../../classes/Ability.js')
const Melee = require('../gear/Melee.js')
const Projectile = require('../gear/Projectile.js')

const WeaponTraining = new Ability({
	name: `Weapon Training`,
	desc: [
		`+1 Attack with a specified weapon type.`,
	],
	max: 1,
	experience: 3,
	opts: [ ...Object.values(Melee), ...Object.values(Projectile) ]
})

module.exports = WeaponTraining