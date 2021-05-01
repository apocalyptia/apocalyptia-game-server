import Gear from '../../../classes/Gear.mjs'

const Bayonet = new Gear({
	name: `Bayonet`,
	type: `Accessory`,
	desc: [
		`Counts as a Knife.`,
		`+1 Damage and Pierce for Melee Attacks.`,
	],
	sz: 1
})

export default Bayonet