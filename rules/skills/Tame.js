const Skill = require('../../classes/Skill.js')
const Specialty = require('../../classes/Specialty.js')

const Tame = new Skill({
	name: `Tame`,
	desc: [
		`Alter an animal’s Attitude by one step.`,
	],
	type: `Skill`,
	parent: `Demeanor`,
	diff: `Demeanor`,
	specs: {
		command: new Specialty({
			name: `Command`,
			type: `Specialty`,
			desc: [
				`Animal obeys your command.`,
			]
		}),
		train: new Specialty({
			name: `Train`,
			type: `Specialty`,
			desc: [
				`(1wk) Animals learn commands = [its Brains x 2].`,
			]
		})
	}
})

module.exports = Tame