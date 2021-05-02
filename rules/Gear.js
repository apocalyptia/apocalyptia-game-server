const Accessories = require('./gear/Accessories.js')
const Ammo = require('./gear/Ammo.js')
const Armor = require('./gear/Armor.js')
const Attributes = require('./gear/Attributes.js')
const Bombs = require('./gear/Bombs.js')
const Documents = require('./gear/Documents.js')
const Drugs = require('./gear/Drugs.js')
const Electronics = require('./gear/Electronics.js')
const Medical = require('./gear/Medical.js')
const Melee = require('./gear/Melee.js')
const Miscellaneous = require('./gear/Miscellaneous.js')
const Projectile = require('./gear/Projectile.js')
const Resources = require('./gear/Resources.js')
const Storage = require('./gear/Storage.js')
const Tools = require('./gear/Tools.js')
const Wearables = require('./gear/Wearables.js')

const Gear = {
	accessories: Accessories,
	ammo: Ammo,
	armor: Armor,
	attributes: Attributes,
	bombs: Bombs,
	documents: Documents,
	drugs: Drugs,
	electronics: Electronics,
	medical: Medical,
	melee: Melee,
	miscellaneous: Miscellaneous,
	projectile: Projectile,
	resources: Resources,
	storage: Storage,
	tools: Tools,
	wearables: Wearables,
}

module.exports = Gear