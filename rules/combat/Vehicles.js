const Rule = require('../../classes/Rule.js')
const Conditions = require('./combat/subrules/vehicles/Conditions.js')
const Occupants = require('./combat/subrules/vehicles/Occupants.js')
const Pedestrians = require('./combat/subrules/vehicles/Pedestrians.js')
const Tires = require('./combat/subrules/vehicles/Tires.js')
const Wreck = require('./combat/subrules/vehicles/Wreck.js')
const Burning = require('./combat/subrules/vehicles/Burning.js')

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

module.exports = Vehicles