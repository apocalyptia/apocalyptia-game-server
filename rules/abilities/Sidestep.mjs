import Ability from '../../classes/Ability.mjs'

const Sidestep = new Ability({
	name: `Side-step`,
	desc: [
		`Free Dodge Action once per round.`,
	],
	max: 1,
	experience: 12
})

export default Sidestep