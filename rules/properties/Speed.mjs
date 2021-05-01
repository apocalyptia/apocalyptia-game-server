import Property from '../../classes/Property.mjs'

const Speed = new Property({
	name: `Speed`,
	desc: [
		`Speed = Agility x 3`,
		`This is also the number of yards you can Walk as 1 Action.`,
		`When traveling long distances overland, you can March at [Speed / 2] mph for up to [Constitution x 3] hrs per day.`,
	],
	formula: ['agility'],
	type: `Property`
})

export default Speed