const Bandage = require('./medical/Bandage.js')
const Crutch = require('./medical/Crutch.js')
const EMTBag = require('./medical/EMTBag.js')
const FirstAidKit = require('./medical/FirstAidKit.js')
const PressureCuff = require('./medical/PressureCuff.js')
const Stethoscope = require('./medical/Stethoscope.js')
const SurgeryKit = require('./medical/SurgeryKit.js')
const Thermometer = require('./medical/Thermometer.js')
const TransfusionKit = require('./medical/TransfusionKit.js')
const WaterFilter = require('./medical/WaterFilter.js')

const Medical = {
	bandage: Bandage,
	crutch: Crutch,
	emtbag: EMTBag,
	firstaidkit: FirstAidKit,
	pressurecuff: PressureCuff,
	stethoscope: Stethoscope,
	surgerykit: SurgeryKit,
	thermometer: Thermometer,
	transfusionkit: TransfusionKit,
	waterfilter: WaterFilter
}

module.exports = Medical