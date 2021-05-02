const Age = require('./description/Age.js')
const Hair = require('./description/Hair.js')
const Height = require('./description/Height.js')
const Name = require('./description/Name.js')
const Player = require('./description/Player.js')
const Sex = require('./description/Sex.js')
const Skin = require('./description/Skin.js')
const Weight = require('./description/Weight.js')

const Creation = {
	description: {
		list: [
			Player,
			Name,
			Age,
			Sex,
			Height,
			Weight,
			Skin,
			Hair,
		]
	},
	explanations: {
		abilities: [
			`Abilities are special bonuses, knowledge, or techniques that can be purchased with Experience.`
		],
		properties: [
			`Properties represent a variety of attributes that are derived from a Character's Trait scores.`
		],
		skills: [
			`You get Brains x 6 Skill points.`,
			`Skills can range from 0 to 6.`,
			`Skill rolls are [d6 + Skill].`,
			`Trait scores set the upper limit for their Skills.`,
		],
		skillFlow: [
			`Once per month (in-game), transfer 1 point from a Skill you have not used to one that you have used.`
		],
		specialties: [
			`Specialties (listed below their Skills) equal their parent Skill by default.`,
			`Specialties can exceed the parent Skill by taking the Specialize Ability.`,
			`Unless otherwise noted, a Skill takes one Action.`,
		],
		startingGear: [
			`You start with some random Gear:`,
			`One piece of Armor`,
			`One Melee weapon`,
			`One Projectile weapon`,
			`1d6 rounds of Ammo`,
			`Random items = Luck`,
			`1 Food and 1 Water`,
		],
		traits: [
			`You get 14 Trait points.`,
			`Traits can range from 1 to 6.`,
			`Trait rolls are [d6 + Trait].`,
			`Trait scores set the upper limit for their Skills.`,
		],
	},
	steps: [
		`Description`,
		`Traits`,
		`Skills`,
		`Properties`,
		`Abilities`,
		`Gear`
	],
	maxTraits: 6,
	startingSkillsMultiplier: 6,
	startingTraits: 14
}

module.exports = Creation