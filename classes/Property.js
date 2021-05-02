const Rule = require('./Rule.js')

module.exports = class Property extends Rule {
	constructor({
		desc=[],
		formula=[],
		name=``,
		type=`Property`,
		visible=false
	}) {
		super({
			desc,
			name,
			type,
			visible,
		})
		this.desc = desc
		this.formula = formula
		this.name = name
		this.type = type
		this.visible = visible
	}
}