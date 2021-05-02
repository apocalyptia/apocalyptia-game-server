const Ax = require('./melee/Ax.js')
const BaseballBat = require('./melee/BaseballBat.js')
const BrassKnuckles = require('./melee/BrassKnuckles.js')
const Club = require('./melee/Club.js')
const Crowbar = require('./melee/Crowbar.js')
const Hammer = require('./melee/Hammer.js')
const Hatchet = require('./melee/Hatchet.js')
const Knife = require('./melee/Knife.js')
const Machete = require('./melee/Machete.js')
const RiotShield = require('./melee/RiotShield.js')
const Sledgehammer = require('./melee/Sledgehammer.js')
const Spear = require('./melee/Spear.js')
const Staff = require('./melee/Staff.js')
const Sword = require('./melee/Sword.js')

const Melee = {
	ax: Ax,
	baseballbat: BaseballBat,
	brassknuckles: BrassKnuckles,
	club: Club,
	crowbar: Crowbar,
	hammer: Hammer,
	hatchet: Hatchet,
	knife: Knife,
	machete: Machete,
	riotshield: RiotShield,
	sledgehammer: Sledgehammer,
	spear: Spear,
	staff: Staff,
	sword: Sword
}

module.exports = Melee