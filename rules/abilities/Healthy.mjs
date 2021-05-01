import Ability from '../../classes/Ability.mjs'

const Healthy = new Ability({
	name: `Healthy`,
	desc: [
		`+1 Health for each Body Part.`,
	],
	max: 3,
	experience: 24
})

export default Healthy