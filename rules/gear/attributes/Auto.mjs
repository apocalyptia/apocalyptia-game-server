import Rule from '../../../classes/Rule.mjs'

const Auto = new Rule({
	name: `Auto`,
	desc: [
		`Choose either Burst or Spray.`,
		`Burst: +3 Projectile Attack vs one target.`,
		`Spray: 3yd Blast Attack.`,
		`Uses 10 bullets.`,
	]
})

export default Auto