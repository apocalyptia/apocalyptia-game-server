import Ability from '../../classes/Ability.mjs'
import Build from '../skills/Build.mjs'
import Larceny from '../skills/Larceny.mjs'
import Medicine from '../skills/Medicine.mjs'
import Science from '../skills/Science.mjs'
import Survival from '../skills/Survival.mjs'
import Tame from '../skills/Tame.mjs'

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

export default EfficientWork