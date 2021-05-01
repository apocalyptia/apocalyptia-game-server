import Rule from '../../classes/Rule.mjs'

const Grab = new Rule({
	name: `Grab`,
	desc: [
		`Roll [Melee(Unarmed) vs DEF] to impose the 'Grabbed' Status.`,
	],
	type: `Offensive`
})

export default Grab