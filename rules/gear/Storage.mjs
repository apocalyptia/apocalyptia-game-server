import Canteen from './storage/Canteen.mjs'
import Cooler from './storage/Cooler.mjs'
import FuelCan from './storage/FuelCan.mjs'
import Lockbox from './storage/Lockbox.mjs'
import PlasticJug from './storage/PlasticJug.mjs'
import Speedloader from './storage/Speedloader.mjs'
import WaterBottle from './storage/WaterBottle.mjs'

const Storage = {
	canteen: Canteen,
	cooler: Cooler,
	fuelcan: FuelCan,
	lockbox: Lockbox,
	plasticjug: PlasticJug,
	speedloader: Speedloader,
	waterbottle: WaterBottle
}

export default Storage