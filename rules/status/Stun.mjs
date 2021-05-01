import Rule from '../../classes/Rule.mjs'

const Stun = new Rule({
	name: `Stun`,
	desc: [
		`Defenseless, Harmless, and Immobilized.`,
		`You fall Prone if Stunned for longer than 1 round.`,
	],
	type: `Status`
})

export default Stun