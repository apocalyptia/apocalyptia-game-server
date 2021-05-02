const Ability = require('../../classes/Ability.js')
const Build = require('../skills/Build.js')
const Larceny = require('../skills/Larceny.js')
const Medicine = require('../skills/Medicine.js')
const Science = require('../skills/Science.js')
const Survival = require('../skills/Survival.js')
const Tame = require('../skills/Tame.js')

const EfficientWork = new Ability({
	name: `Efficient Work`,
	desc: [
		`[Time / 2] for one of the following Skills (minimum 1 action): Build, Larceny, Medicine, Science, Survival, or Tame.`
	],
	max: 1,
	experience: 6,
	opts: [
		Build,
		Larceny,
		Medicine,
		Science,
		Survival,
		Tame
	]
})

module.exports = EfficientWork