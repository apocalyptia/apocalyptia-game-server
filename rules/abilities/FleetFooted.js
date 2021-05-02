const Ability = require('../../classes/Ability.js')

const FleetFooted = new Ability({
	name: `Fleet Footed`,
	desc: [
		`+1 Speed.`,
	],
	max: 3,
	experience: 6
})

module.exports = FleetFooted