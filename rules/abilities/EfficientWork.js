const Ability = require('../../classes/Ability.js')

const EfficientWork = new Ability({
	name: `Efficient Work`,
	desc: [
		`[Time / 2] for one of the following Skills (minimum 1 Action):`,
		`Build, Larceny, Medicine, Science, Survival, or Tame.`
	],
	max: 1,
	experience: 6,
	options: [
		`Build`,
		`Larceny`,
		`Medicine`,
		`Science`,
		`Survival`,
		`Tame`
	]
})

module.exports = EfficientWork