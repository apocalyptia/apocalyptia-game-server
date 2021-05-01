import Rule from '../../../classes/Rule.mjs'

const Scatter = new Rule({
	name: `Scatter`,
	desc: [
		`Range penalties apply to Damage instead of Attack.`,
		`-1 Penetration.`
	]
})

export default Scatter