const Bleeding = require('./status/Bleeding.js')
const Blind = require('./status/Blind.js')
const Concealed = require('./status/Concealed.js')
const Cover = require('./status/Cover.js')
const Deaf = require('./status/Deaf.js')
const Defenseless = require('./status/Defenseless.js')
const Grabbed = require('./status/Grabbed.js')
const Harmless = require('./status/Harmless.js')
const Immobilized = require('./status/Immobilized.js')
const OffHand = require('./status/OffHand.js')
const Pinned = require('./status/Pinned.js')
const Prone = require('./status/Prone.js')
const Range = require('./status/Range.js')
const Restrained = require('./status/Restrained.js')
const Stun = require('./status/Stun.js')
const Unarmed = require('./status/Unarmed.js')
const Unconscious = require('./status/Unconscious.js')
const Unstable = require('./status/Unstable.js')
const Visibility = require('./status/Visibility.js')

const Status = {
	bleeding: Bleeding,
	blind: Blind,
	concealed: Concealed,
	cover: Cover,
	deaf: Deaf,
	defenseless: Defenseless,
	grabbed: Grabbed,
	harmless: Harmless,
	immobilized: Immobilized,
	offhand: OffHand,
	pinned: Pinned,
	prone: Prone,
	range: Range,
	restrained: Restrained,
	stun: Stun,
	unarmed: Unarmed,
	unconscious: Unconscious,
	unstable: Unstable,
	visibility: Visibility
}

module.exports = Status