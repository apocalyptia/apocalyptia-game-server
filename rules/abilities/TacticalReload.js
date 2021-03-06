const Ability = require('../../classes/Ability.js')

const TacticalReload = new Ability({
	name: `Tactical Reload`,
	desc: [
		`Free Reload once per round.`,
	],
	max: 1,
	experience: 3
})

module.exports = TacticalReload