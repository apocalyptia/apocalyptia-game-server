import Gear from '../../../classes/Gear.mjs'
import Match from '../attributes/Match.mjs'

const Match308 = new Gear({
	name: `.308 Match`,
	type: `Ammo`,
	desc: [
		`Competition-grade ammunition.`,
	],
	sz: 0.02,
	attr: [
		Match,
	]
})
Match308.cal = `.308`

export default Match308