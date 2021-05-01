import Ability from '../../classes/Ability.mjs'

const FastDraw = new Ability({
	name: `Fast Draw`,
	desc: [
		`Free item draw once per round.`,
	],
	max: 1,
	experience: 6
})

export default FastDraw