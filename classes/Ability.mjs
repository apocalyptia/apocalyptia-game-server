import Rule from './Rule.mjs'

export default class Ability extends Rule {
	constructor({
		desc,
		experience,
		formula=null,
		max,
		name,
		notes=``,
		opts=[],
		selection=0,
		type=`Ability`,
		visible,
	}) {
		super({
			desc,
			name,
			type,
			visible,
		})
		this.experience = experience
		this.formula = formula
		this.max = max
		this.notes = notes
		this.opts = opts
		this.selection = selection
	}
}