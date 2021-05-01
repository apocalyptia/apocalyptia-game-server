import Ability from '../../classes/Ability.mjs'
import Traits from '../Traits.mjs'

const SelfImprovement = new Ability({
	name: `Self Improvement`,
	desc: [
		`+1 to a Trait (max 6).`,
	],
	max: 1,
	experience: 30,
	opts: Traits.list
})

export default SelfImprovement