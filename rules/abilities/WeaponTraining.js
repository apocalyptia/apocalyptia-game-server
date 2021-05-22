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
	options: [
		...Object.values(Melee).map(m => m.name),
		...Object.values(Projectile).map(p => p.name)
	]
})

module.exports = WeaponTraining