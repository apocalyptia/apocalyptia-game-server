const Botch = require('./core/Botch.js')
const Dice = require('./core/Dice.js')
const Difficulty = require('./core/Difficulty.js')
const Explode = require('./core/Explode.js')
const Fail = require('./core/Fail.js')
const Success = require('./core/Success.js')

const Core = {
	dice: Dice,
	difficulty: Difficulty,
	success: Success,
	fail: Fail,
	explode: Explode,
	botch: Botch
}

module.exports = Core