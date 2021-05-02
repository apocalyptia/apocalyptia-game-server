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
	opts: [ ...Object.values(Melee), ...Object.values(Projectile) ]
})

module.exports = FavoriteWeapon