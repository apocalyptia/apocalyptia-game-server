const Rule = require('./Rule.js')

module.exports = class Specialty extends Rule {
	constructor({
		desc=[],
		diff=null,
		name=``,
		type=`Specialty`,
		visible=false
	}) {
		super({
			desc,
			name,
			type,
			visible,
		})
		this.desc = desc
		this.diff = diff
		this.name = name
		this.type = type
		this.visible = visible
	}
}