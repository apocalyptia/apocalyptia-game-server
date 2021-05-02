const Aim = require('./maneuvers/Aim.js')
const CalledShot = require('./maneuvers/CalledShot.js')
const Disarm = require('./maneuvers/Disarm.js')
const Distract = require('./maneuvers/Distract.js')
const Duck = require('./maneuvers/Duck.js')
const Encourage = require('./maneuvers/Encourage.js')
const Grab = require('./maneuvers/Grab.js')
const Grapple = require('./maneuvers/Grapple.js')
const Hide = require('./maneuvers/Hide.js')
const Hostage = require('./maneuvers/Hostage.js')
const Interrogate = require('./maneuvers/Interrogate.js')
const Negotiate = require('./maneuvers/Negotiate.js')
const NonLethalForce = require('./maneuvers/NonLethalForce.js')
const Protect = require('./maneuvers/Protect.js')
const Push = require('./maneuvers/Push.js')
const Recruit = require('./maneuvers/Recruit.js')
const Reload = require('./maneuvers/Reload.js')
const Shove = require('./maneuvers/Shove.js')
const Sneak = require('./maneuvers/Sneak.js')
const Tackle = require('./maneuvers/Tackle.js')
const Taunt = require('./maneuvers/Taunt.js')
const Throw = require('./maneuvers/Throw.js')
const Torture = require('./maneuvers/Torture.js')
const Trip = require('./maneuvers/Trip.js')

const Maneuvers = {
	aim: Aim,
	calledshot: CalledShot,
	disarm: Disarm,
	distract: Distract,
	duck: Duck,
	encourage: Encourage,
	grab: Grab,
	grapple: Grapple,
	hide: Hide,
	hostage: Hostage,
	interrogate: Interrogate,
	negotiate: Negotiate,
	nonlethalforce: NonLethalForce,
	protect: Protect,
	push: Push,
	recruit: Recruit,
	reload: Reload,
	shove: Shove,
	sneak: Sneak,
	tackle: Tackle,
	taunt: Taunt,
	throw: Throw,
	torture: Torture,
	trip: Trip
}

module.exports = Maneuvers