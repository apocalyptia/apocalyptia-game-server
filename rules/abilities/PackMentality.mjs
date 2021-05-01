import Ability from '../../classes/Ability.mjs'

const PackMentality = new Ability({
	name: `Pack Mentality`,
	desc: [
		`+1 Attack at a target a Comrade Attacks this round.`,
	],
	max: 1,
	experience: 3
})

export default PackMentality