import Ability from '../../classes/Ability.mjs'
import Skills from '../Skills.mjs'

const Specialize = new Ability({
	name: `Specialize`,
	desc: [
		`+1 to a Skill Specialty.`,
	],
	max: 1,
	experience: 3,
	opts: Skills.specs
})

export default Specialize