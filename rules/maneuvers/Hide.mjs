import Rule from '../../classes/Rule.mjs'

const Hide = new Rule({
	name: `Hide`, 
	desc: [
		`Roll [Stealth vs Perception] to be Concealed.`,
		`Your Speed is 0.`,
		`+3 Stealth if Prone.`,
	],
	type: `Defensive`
})

export default Hide