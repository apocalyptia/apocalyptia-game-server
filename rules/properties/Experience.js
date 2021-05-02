const Property = require('../../classes/Property.js')

const Experience = new Property({
	name: `Experience`,
	desc: [
		`Experience Points (XP) = Brains x 3`,
		`XP represents how much you have learned up to now.`,
		`You get additional XP = Intellect for each game session you survive.`,
		`You also get +1 XP every time you roll a Botch.`,
		`The Narrator may choose to give bonus XP.`,
		`You may spend XP to buy Abilities to improve your Character.`,
		`You may also spend 1XP per round to regain 1 Luck Point.`,
	],
	type: `Property`
})

module.exports = Experience