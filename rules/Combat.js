const Actions = require('./combat/Actions.js')
const Attack = require('./combat/Attack.js')
const Communication = require('./combat/Communication.js')
const Damage = require('./combat/Damage.js')
const Defense = require('./combat/Defense.js')
const Movement = require('./combat/Movement.js')
const Rounds = require('./combat/Rounds.js')
const Trauma = require('./combat/Trauma.js')

const Combat = {
	rounds: Rounds,
	actions: Actions,
	communication: Communication,
	movement: Movement,
	attack: Attack,
	defense: Defense,
	damage: Damage,
	trauma: Trauma
	// vehicles: Vehicles
}

module.exports = Combat