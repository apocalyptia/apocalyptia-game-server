const Ability = require('../../classes/Ability.js')
const Skills = require('../Skills.js')

const Specialize = new Ability({
	name: `Specialize`,
	desc: [
		`+1 to a Skill Specialty.`,
	],
	max: 1,
	experience: 3,
	opts: Skills.specs
})

module.exports = Specialize