import Rule from '../../classes/Rule.mjs'

const Throw = new Rule({
	name: `Throw`,
	desc: [
		`Throw a Grabbed or Restrained enemy up to [Constitution] yds.`,
		`The target takes 1 point of Blunt Damage to a random Body Part and land Prone.`,
	],
	type: `Offensive`
})

export default Throw