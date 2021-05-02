const AccessoriesList = require('./gear/AccessoriesList.js')
const AmmoList = require('./gear/ammo/AmmoList.js')
const ArmorList = require('./gear/ArmorList.js')
const BombsList = require('./gear/BombsList.js')
const DocumentsList = require('./gear/DocumentsList.js')
const DrugsList = require('./gear/DrugsList.js')
const ElectronicsList = require('./gear/ElectronicsList.js')
const EquipmentList = require('./gear/EquipmentList.js')
const GearList = require('./GearList.js')
const MedicalList = require('./gear/MedicalList.js')
const MeleeWeaponsList = require('./gear/MeleeWeaponsList.js')
const MiscellaneousList = require('./gear/MiscellaneousList.js')
const ProjectileWeaponsList = require('./gear/ProjectileWeaponsList.js')
const StorageList = require('./gear/StorageList.js')
const ToolsList = require('./gear/ToolsList.js')
const WearablesList = require('./gear/WearablesList.js')

module.exports = [
	{
		name: `Master Gear List`,
		value: undefined,
		list: GearList.list
	},
	{
		name: `Accessory`,
		value: undefined,
		list: AccessoriesList.list
	},
	{
		name: `Ammo`,
		value: undefined,
		list: AmmoList.list
	},
	{
		name: `Armor`,
		value: undefined,
		list: ArmorList.list
	},
	{
		name: `Bomb`,
		value: undefined,
		list: BombsList.list
	},
	{
		name: `Document`,
		value: undefined,
		list: DocumentsList.list
	},
	{
		name: `Drug`,
		value: undefined,
		list: DrugsList.list
	},
	{
		name: `Electronics`,
		value: undefined,
		list: ElectronicsList.list
	},
	{
		name: `Equipment`,
		value: undefined,
		list: EquipmentList.list
	},
	{
		name: `Medical`,
		value: undefined,
		list: MedicalList.list
	},
	{
		name: `Melee`,
		value: undefined,
		list: MeleeWeaponsList.list
	},
	{
		name: `Miscellaneous`,
		value: undefined,
		list: MiscellaneousList.list
	},
	{
		name: `Projectile`,
		value: undefined,
		list: ProjectileWeaponsList.list
	},
	{
		name: `Storage`,
		value: undefined,
		list: StorageList.list
	},
	{
		name: `Tools`,
		value: undefined,
		list: ToolsList.list
	},
	{
		name: `Wearables`,
		value: undefined,
		list: WearablesList.list
	}
]