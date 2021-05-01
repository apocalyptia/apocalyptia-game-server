import Ability from '../../classes/Ability.mjs'

const TacticalReload = new Ability({
	name: `Tactical Reload`,
	desc: [
		`Free Reload once per round.`,
	],
	max: 1,
	experience: 3
})

export default TacticalReload