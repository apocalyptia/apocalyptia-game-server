import Bleeding from './status/Bleeding.mjs'
import Blind from './status/Blind.mjs'
import Concealed from './status/Concealed.mjs'
import Cover from './status/Cover.mjs'
import Deaf from './status/Deaf.mjs'
import Defenseless from './status/Defenseless.mjs'
import Grabbed from './status/Grabbed.mjs'
import Harmless from './status/Harmless.mjs'
import Immobilized from './status/Immobilized.mjs'
import OffHand from './status/OffHand.mjs'
import Pinned from './status/Pinned.mjs'
import Prone from './status/Prone.mjs'
import Range from './status/Range.mjs'
import Restrained from './status/Restrained.mjs'
import Stun from './status/Stun.mjs'
import Unarmed from './status/Unarmed.mjs'
import Unconscious from './status/Unconscious.mjs'
import Unstable from './status/Unstable.mjs'
import Visibility from './status/Visibility.mjs'

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

export default Status