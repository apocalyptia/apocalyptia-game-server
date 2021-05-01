import Ability from '../../classes/Ability.mjs'

const HyperImmunity = new Ability({
	name: `Hyper Immunity`,
	desc: [
		`+1 to resist Diseases.`,
	],
	max: 3,
	experience: 3
})

export default HyperImmunity