const Cellphone = require('./electronics/Cellphone.js')
const EmergencyRadio = require('./electronics/EmergencyRadio.js')
const Flashlight = require('./electronics/Flashlight.js')
const GeigerCounter = require('./electronics/GeigerCounter.js')
const HandRadio = require('./electronics/HandRadio.js')
const Headlamp = require('./electronics/Headlamp.js')
const Lantern = require('./electronics/Lantern.js')
const Megaphone = require('./electronics/Megaphone.js')
const Multimeter = require('./electronics/Multimeter.js')
const NightvisionGoggles = require('./electronics/NightvisionGoggles.js')
const QuadcopterDrone = require('./electronics/QuadcopterDrone.js')
const RCCar = require('./electronics/RCCar.js')
const SolarLamp = require('./electronics/SolarLamp.js')
const StunGun = require('./electronics/StunGun.js')

const Electronics = {
	cellphone: Cellphone,
	emergencyradio: EmergencyRadio,
	flashlight: Flashlight,
	geigercounter: GeigerCounter,
	handradio: HandRadio,
	headlamp: Headlamp,
	lantern: Lantern,
	megaphone: Megaphone,
	multimeter: Multimeter,
	nightvisiongoggles: NightvisionGoggles,
	quadcopterdrone: QuadcopterDrone,
	rccar: RCCar,
	solarlamp: SolarLamp,
	stungun: StunGun
}

module.exports = Electronics