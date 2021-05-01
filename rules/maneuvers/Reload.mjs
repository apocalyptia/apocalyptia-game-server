import Rule from '../../classes/Rule.mjs'

const Reload = new Rule({
	name: `Reload`,
	desc: [
		`Replace a magazine or a single piece of ammunition (depending on the weapon) in a Projectile weapon.`,
	],
	type: `Offensive`
})

export default Reload