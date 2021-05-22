const Ability = require('../../classes/Ability.js')
const LanguageList = require('../lists/LanguageList.js')

const Multilingual = new Ability({
	name: `Multilingual`,
	desc: [
		`Learn a new form of communication.`,
	],
	max: 1,
	experience: 6,
	options: [ ...LanguageList ]
})

module.exports = Multilingual