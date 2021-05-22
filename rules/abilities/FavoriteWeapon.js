const Ability = require('../../classes/Ability.js')
const Melee = require('../gear/Melee.js')
const Projectile = require('../gear/Projectile.js')

const FavoriteWeapon = new Ability({
	name: `Favorite Weapon`,
	desc: [
		`Any Botch with a specified weapon type is reduced in severity to a normal Fail.`,
	],
	max: 1,
	experience: 3,
	options: [
		...Object.values(Melee).map(m => m.name),
		...Object.values(Projectile).map(p => p.name)
	]
})

module.exports = FavoriteWeapon