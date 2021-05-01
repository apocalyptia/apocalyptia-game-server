import Ability from '../../classes/Ability.mjs'

const Wrestling = new Ability({
	name: `Wrestling`,
	desc: [
		`Free Grapple Action once per round.`,
	],
	max: 1,
	experience: 12
})

export default Wrestling