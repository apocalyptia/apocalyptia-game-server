const Gear = require('../../../classes/Gear.js')

const StunGun = new Gear({
	name: `Stun Gun`,
	type: `Electronics`,
	desc: [
		`Melee Attack.`,
		`C9# or Stun next round.`,
	],
	sz: 1
})
StunGun.dur = 120

module.exports = StunGun