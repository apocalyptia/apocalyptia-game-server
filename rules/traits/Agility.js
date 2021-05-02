const Rule = require('../../classes/Rule.js')
const Skills = require('../Skills.js')

const agilitySkills = Object.values(Skills).filter(skill => skill.parent == 'Agility')

const Agility = new Rule({
	name: `Agility`,
	desc: [
		`Agility is a Character’s talent for physical coordination.`,
		`High Agility indicates balance, flexibility, and fine motor skill.`,
		`This Trait is a factor in the Speed and Dodge Properties.`,
		`Agility is the parent Trait for the following Skills: ${agilitySkills.map(skill => skill.name).join(', ')}.`,
	],
	type: `Trait`
})

module.exports = Agility