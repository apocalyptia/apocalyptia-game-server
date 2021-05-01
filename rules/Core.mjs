import Botch from './core/Botch.mjs'
import Dice from './core/Dice.mjs'
import Difficulty from './core/Difficulty.mjs'
import Explode from './core/Explode.mjs'
import Fail from './core/Fail.mjs'
import Success from './core/Success.mjs'

const Core = {
	dice: Dice,
	difficulty: Difficulty,
	success: Success,
	fail: Fail,
	explode: Explode,
	botch: Botch
}

export default Core