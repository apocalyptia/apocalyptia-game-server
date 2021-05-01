import Skill from '../../classes/Skill.mjs'
import Specialty from '../../classes/Specialty.mjs'

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

export default Projectile