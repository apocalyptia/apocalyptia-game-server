import Gear from '../../../classes/Gear.mjs'

const ConcealedHolster = new Gear({
	name: `Concealed Holster`,
	desc: [
		`Perception 12# to spot a Size 1 Gun.`,
	],
	sz: 0
})
ConcealedHolster.slots = 1

export default ConcealedHolster