const Ability = require('../../classes/Ability.js')
const Skills = require('../Skills.js')

const Specialize = new Ability({
	name: `Specialize`,
	desc: [
		`+1 to a Skill Specialty.`,
	],
	max: 1,
	experience: 3,
	options: Object.values(Skills).map(spec => {
		return Object.values(spec.specs).map(s => s.name)
	}).flat()
})

module.exports = Specialize