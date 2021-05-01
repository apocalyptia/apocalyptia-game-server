import Actions from './combat/Actions.mjs'
import Attack from './combat/Attack.mjs'
import Communication from './combat/Communication.mjs'
import Damage from './combat/Damage.mjs'
import Defense from './combat/Defense.mjs'
import Movement from './combat/Movement.mjs'
import Rounds from './combat/Rounds.mjs'
import Trauma from './combat/Trauma.mjs'

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

export default Combat