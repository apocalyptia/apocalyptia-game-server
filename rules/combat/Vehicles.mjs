import Rule from '../../classes/Rule.mjs'
import Conditions from './combat/subrules/vehicles/Conditions.mjs'
import Occupants from './combat/subrules/vehicles/Occupants.mjs'
import Pedestrians from './combat/subrules/vehicles/Pedestrians.mjs'
import Tires from './combat/subrules/vehicles/Tires.mjs'
import Wreck from './combat/subrules/vehicles/Wreck.mjs'
import Burning from './combat/subrules/vehicles/Burning.mjs'

const Vehicles = new Rule({
	name: `Vehicles`, 
	desc: [
		`Roll [Drive(Ram) vs Drive(Stunt)] to hit an enemy vehicle.`,
		`If [loser’s Structure <= winner’s Structure], or if a vehicle takes [Damage > Structure], the vehicle gets a Condition.`,
		`0 Structure disables a vehicle.`,
		`A Botch is a Wreck.`,
	],
	subrules: [
		Conditions,
		Occupants,
		Pedestrians,
		Tires,
		Wreck,
		Burning,
	]
})

export default Vehicles