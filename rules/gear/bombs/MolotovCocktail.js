const Gear = require('../../../classes/Gear.js')
const Blast = require('../attributes/Blast.js')
const FireDamage = require('../attributes/FireDamage.js')

const MolotovCocktail = new Gear({
	name: `Molotov Cocktail`,
	type: `Bomb`,
	desc: [
		`Glass bottle of fuel with rag wick.`,
	],
	sz: 1,
	attr: [
		Blast,
		FireDamage,
	]
})
MolotovCocktail.dmg = `1d6`
MolotovCocktail.rng = 3
MolotovCocktail.fuse = 10
MolotovCocktail.dur = 20
MolotovCocktail.mix = 3

module.exports = MolotovCocktail