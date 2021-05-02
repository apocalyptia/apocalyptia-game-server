const Skill = require('../../classes/Skill.js')
const Specialty = require('../../classes/Specialty.js')

const Projectile = new Skill({
	name: `Projectile`,
	desc: [
		`Projectile combat.`,
	],
	type: `Skill`,
	parent: `Agility`,
	diff: `Defense`,
	specs: {
		shoot: new Specialty({
			name: `Shoot`,
			type: `Specialty`,
			desc: [
				`Roll vs target's Defense.`,
			]
		}),
		throw: new Specialty({
			name: `Throw`,
			type: `Specialty`,
			desc: [
				`Roll vs target's Defense.`,
				`Range is [Constitution x 3yds].`,
			]
		})
	}
})

module.exports = Projectile