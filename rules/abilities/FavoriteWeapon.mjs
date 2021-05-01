import Ability from '../../classes/Ability.mjs'
import Melee from '../gear/Melee.mjs'
import Projectile from '../gear/Projectile.mjs'

const FavoriteWeapon = new Ability({
	name: `Favorite Weapon`,
	desc: [
		`Any Botch with a specified weapon type is reduced in severity to a normal Fail.`,
	],
	max: 1,
	experience: 3,
	opts: [ ...Object.values(Melee), ...Object.values(Projectile) ]
})

export default FavoriteWeapon