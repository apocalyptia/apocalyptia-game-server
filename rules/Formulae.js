const Formulae = {
	deflection: (traits) => Math.floor((b + c) / 2),
	discipline: (traits) => Math.floor((c + d) / 2),
	endurance: (traits) => c * 3,
	evasion: (traits) => Math.floor((a + b) / 2),
	experience: (traits) => b * 3,
	fitness: (traits) => Math.floor((a + c) / 2),
	intellect: (traits) => Math.floor((b + d) / 2),
	luck: (traits) => Math.floor((a + d) / 2),
	psyche: (traits) => d * 3,
	speed: (traits) => a * 3,
	health: (traits) => {
		return {
			head: c,
			leftArm: c,
			rightArm: c,
			leftLeg: c,
			rightLeg: c,
			torso: c * 2
		}
	}
}

module.exports = Formulae