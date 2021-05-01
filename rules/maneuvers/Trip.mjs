import Rule from '../../classes/Rule.mjs'

const Trip = new Rule({
	name: `Trip`,
	desc: [
		`Roll [Melee vs Agility] to knock an enemy Prone. 1 Damage.`,
	],
	type: `Offensive`
})

export default Trip