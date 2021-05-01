import Ability from '../../classes/Ability.mjs'
import LanguageList from '../lists/LanguageList.mjs'

const Multilingual = new Ability({
	name: `Multilingual`,
	desc: [
		`Learn a new form of communication.`,
	],
	max: 1,
	experience: 6,
	opts: LanguageList
})

export default Multilingual