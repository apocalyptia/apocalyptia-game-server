const Rule = require('../../classes/Rule.js')

const Deaf = new Rule({
	name: `Deaf`,
	desc: [
		`You automatically Fail any roll that involves hearing.`
	],
	type: `Status`
})

module.exports = Deaf