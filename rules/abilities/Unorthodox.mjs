import Ability from '../../classes/Ability.mjs'
import Skills from '../Skills.mjs'
import Traits from '../Traits.mjs'

const Unorthodox = new Ability({
	name: `Unorthodox`,
	desc: [
		`Pick a new parent Trait for a Skill.`,
	],
	max: 1,
	experience: 9,
	opts: (function() {
		const uList = []
		for (let trait in Traits) {
			for (let skill in Skills) {
				const tname = trait.name
				const sname = skill.name
				if (skill.parent != trait.name) {
					uList.push({ name: `${tname} - ${sname}` })
				}
			}
		}
		return [...uList]
	})()
})

export default Unorthodox