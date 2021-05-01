import Property from '../../classes/Property.mjs'

const Evasion = new Property({
	name: `Evasion`,
	desc: [
		`Evasion = (Agility + Brains) / 2.`,
		`This is your default Defense against Projectile Attacks when you do not spend and Action to make an Acrobatics(Dodge) roll.`
	],
	formula: ['agility', 'brains'],
	type: `Property`
})

export default Evasion