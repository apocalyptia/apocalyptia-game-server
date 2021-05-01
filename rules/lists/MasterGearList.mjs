import AccessoriesList from './gear/AccessoriesList.mjs'
import AmmoList from './gear/ammo/AmmoList.mjs'
import ArmorList from './gear/ArmorList.mjs'
import BombsList from './gear/BombsList.mjs'
import DocumentsList from './gear/DocumentsList.mjs'
import DrugsList from './gear/DrugsList.mjs'
import ElectronicsList from './gear/ElectronicsList.mjs'
import EquipmentList from './gear/EquipmentList.mjs'
import GearList from './GearList.mjs'
import MedicalList from './gear/MedicalList.mjs'
import MeleeWeaponsList from './gear/MeleeWeaponsList.mjs'
import MiscellaneousList from './gear/MiscellaneousList.mjs'
import ProjectileWeaponsList from './gear/ProjectileWeaponsList.mjs'
import StorageList from './gear/StorageList.mjs'
import ToolsList from './gear/ToolsList.mjs'
import WearablesList from './gear/WearablesList.mjs'

export default [
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