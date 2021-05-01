import Rule from '../../classes/Rule.mjs'

const Harmless = new Rule({
	name: `Harmless`,
	desc: [
		`You cannot Attack.`,
	],
	type: `Status`
})

export default Harmless