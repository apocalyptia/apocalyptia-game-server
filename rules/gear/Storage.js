const Canteen = require('./storage/Canteen.js')
const Cooler = require('./storage/Cooler.js')
const FuelCan = require('./storage/FuelCan.js')
const Lockbox = require('./storage/Lockbox.js')
const PlasticJug = require('./storage/PlasticJug.js')
const Speedloader = require('./storage/Speedloader.js')
const WaterBottle = require('./storage/WaterBottle.js')

const Storage = {
	canteen: Canteen,
	cooler: Cooler,
	fuelcan: FuelCan,
	lockbox: Lockbox,
	plasticjug: PlasticJug,
	speedloader: Speedloader,
	waterbottle: WaterBottle
}

module.exports = Storage