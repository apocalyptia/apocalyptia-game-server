const Ability = require('../../classes/Ability.js')
const Skills = require('../Skills.js')
const Traits = require('../Traits.js')

const Unorthodox = new Ability({
	name: `Unorthodox`,
	desc: [
		`Pick a new parent Trait for a Skill.`,
	],
	max: 1,
	experience: 9,
	options: (() => {
		const uList = []
		for (const trait in Traits) {
			for (const skill in Skills) {
				const tname = Traits[trait].name
				const sname = Skills[skill].name
				if (skill.parent !== tname) {
					uList.push(`${tname} - ${sname}`)
				}
			}
		}
		return [...uList]
	})()
})

module.exports = Unorthodox