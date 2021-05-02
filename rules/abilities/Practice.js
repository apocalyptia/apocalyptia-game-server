const Ability = require('../../classes/Ability.js')
const Skills = require('../Skills.js')

const Practice = new Ability({
	name: `Practice`,
	desc: [
		`+1 to a Skill (up to the parent Trait).`,
	],
	max: 1,
	experience: 6,
	opts: Skills.list
})

module.exports = Practice