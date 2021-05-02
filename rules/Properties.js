const Deflection = require('./properties/Deflection.js')
const Discipline = require('./properties/Discipline.js')
const Endurance = require('./properties/Endurance.js')
const Evasion = require('./properties/Evasion.js')
const Experience = require('./properties/Experience.js')
const Fitness = require('./properties/Fitness.js')
const Health = require('./properties/Health.js')
const Intellect = require('./properties/Intellect.js')
const Luck = require('./properties/Luck.js')
const Psyche = require('./properties/Psyche.js')
const Speed = require('./properties/Speed.js')

const Properties = {
	deflection: Deflection,
	discipline: Discipline,
	endurance: Endurance,
	evasion: Evasion,
	experience: Experience,
	fitness: Fitness,
	health: Health,
	intellect: Intellect,
	luck: Luck,
	psyche: Psyche,
	speed: Speed
}

module.exports = Properties