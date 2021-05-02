const Skill = require('../../classes/Skill.js')
const Specialty = require('../../classes/Specialty.js')

const Drive = new Skill({
	name: `Drive`,
	desc: [
		`Operate vehicles.`,
	],
	type: `Skill`,
	parent: `Constitution`,
	diff: `varies`,
	specs: {
		ram: new Specialty({
			name: `Ram`,
			type: `Specialty`,
			desc: [
				`Roll vs [Drive(Stunt)] to Attack with a vehicle.`,
			]
		}),
		stunt: new Specialty({
			name: `Stunt`,
			type: `Specialty`,
			desc: [
				`Roll vs [Drive(Ram)] for Defense with a vehicle.`,
			]
		})
	}
})

module.exports = Drive