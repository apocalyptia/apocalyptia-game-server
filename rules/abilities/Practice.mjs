import Ability from '../../classes/Ability.mjs'
import Skills from '../Skills.mjs'

const Practice = new Ability({
	name: `Practice`,
	desc: [
		`+1 to a Skill (up to the parent Trait).`,
	],
	max: 1,
	experience: 6,
	opts: Skills.list
})

export default Practice