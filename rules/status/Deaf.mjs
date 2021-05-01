import Rule from '../../classes/Rule.mjs'

const Deaf = new Rule({
	name: `Deaf`,
	desc: [
		`You automatically Fail any roll that involves hearing.`
	],
	type: `Status`
})

export default Deaf