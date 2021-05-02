const Ability = require('../../classes/Ability.js')

const Focus = new Ability({
	name: `Focus`,
	desc: [
		`+1 Psyche.`,
	],
	max: 3,
	experience: 24
})

module.exports = Focus