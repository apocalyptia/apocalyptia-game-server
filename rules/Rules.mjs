import Abilities from './Abilities.mjs'
import Combat from './Combat.mjs'
import Core from './Core.mjs'
import Creation from './Creation.mjs'
import Diseases from './Diseases.mjs'
import Gear from './Gear.mjs'
import Hazards from './Hazards.mjs'
import Maneuvers from './Maneuvers.mjs'
import Needs from './Needs.mjs'
import Properties from './Properties.mjs'
import Skills from './Skills.mjs'
import Status from './Status.mjs'
import Traits from './Traits.mjs'

const Rules = {
	creation: Creation,
	list: {
		abilities: Abilities,
		combat: Combat,
		core: Core,
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
}

export default Rules