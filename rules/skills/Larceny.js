const Skill = require('../../classes/Skill.js')
const Specialty = require('../../classes/Specialty.js')

const Larceny = new Skill({
	name: `Larceny`,
	desc: [
		`Delicate manual operations.`,
	],
	type: `Skill`,
	parent: `Agility`,
	diff: `varies`,
	specs: {
		mechanical: new Specialty({
			name: `Mechanical`,
			type: `Specialty`,
			desc: [
				`(d6 rounds) Activate or deactivate Locks, Traps, Bombs, and similar mechanisms.`,
			]
		}),
		trick: new Specialty({
			name: `Trick`,
			type: `Specialty`,
			desc: [
				`Roll vs [Perception] to pick pockets, hide items, or some other sleight-of-hand.`,
			]
		})
	}
})

module.exports = Larceny