const Skill = require('../../classes/Skill.js')
const Specialty = require('../../classes/Specialty.js')

const Perception = new Skill({
	name: `Perception`,
	desc: [
		`Processing sensory input.`,
	],
	type: `Skill`,
	parent: `Brains`,
	diff: `varies`,
	specs: {
		search: new Specialty({
			name: `Search`,
			type: `Specialty`,
			desc: [
				`Roll vs [Stealth (or Survival if tracking)].`,
			]
		}),
		intuition: new Specialty({
			name: `Intuition`,
			type: `Specialty`,
			desc: [
				`Roll vs [Socialize or Perform].`,
			]
		})
	}
})

module.exports = Perception