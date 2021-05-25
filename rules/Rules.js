const Abilities = require('./Abilities.js')
const Combat = require('./Combat.js')
const Core = require('./Core.js')
const Creation = require('./Creation.js')
const Diseases = require('./Diseases.js')
const Gear = require('./Gear.js')
const Hazards = require('./Hazards.js')
const Maneuvers = require('./Maneuvers.js')
const Needs = require('./Needs.js')
const Properties = require('./Properties.js')
const Skills = require('./Skills.js')
const Status = require('./Status.js')
const Traits = require('./Traits.js')

const Rules = {
	abilities: Abilities,
	combat: Combat,
	core: Core,
	creation: Creation,
	diseases: Diseases,
	gear: Gear,
	hazards: Hazards,
	maneuvers: Maneuvers,
	needs: Needs,
	properties: Properties,
	skills: Skills,
	status: Status,
	traits: Traits
}

module.exports = Rules