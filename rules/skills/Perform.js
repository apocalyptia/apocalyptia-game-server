const Skill = require('../../classes/Skill.js')
const Specialty = require('../../classes/Specialty.js')

const Perform = new Skill({
	name: `Perform`,
	desc: [
		`Captivating an audience.`,
	],
	type: `Skill`,
	parent: `Demeanor`,
	diff: `Perception`,
	specs: {
		distract: new Specialty({
			name: `Distract`,
			type: `Specialty`,
			desc: [
				`Target is Defenseless for 1 round.`,
			]
		}),
		deceive: new Specialty({
			name: `Deceive`,
			type: `Specialty`,
			desc: [
				`Target believes your plausible falsehood.`,
			]
		})
	}
})

module.exports = Perform