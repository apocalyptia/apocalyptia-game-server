module.exports = class Descriptor {
	constructor({
		id,
		name,
		type,
		value
	}) {
		this.id = id
		this.name = name
		this.type = type
		this.value = value
	}
}