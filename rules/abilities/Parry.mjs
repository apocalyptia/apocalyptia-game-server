import Ability from '../../classes/Ability.mjs'

const Parry = new Ability({
	name: `Parry`,
	desc: [
		`Free Block Action once per round.`,
	],
	max: 1,
	experience: 12
})

export default Parry