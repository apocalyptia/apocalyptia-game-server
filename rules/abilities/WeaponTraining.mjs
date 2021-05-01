import Ability from '../../classes/Ability.mjs'
import Melee from '../gear/Melee.mjs'
import Projectile from '../gear/Projectile.mjs'

const WeaponTraining = new Ability({
	name: `Weapon Training`,
	desc: [
		`+1 Attack with a specified weapon type.`,
	],
	max: 1,
	experience: 3,
	opts: [ ...Object.values(Melee), ...Object.values(Projectile) ]
})

export default WeaponTraining