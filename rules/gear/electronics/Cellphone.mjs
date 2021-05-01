import Gear from '../../../classes/Gear.mjs'

const Cellphone = new Gear({
	name: `Cellphone`,
	type: `Electronics`,
	desc: [
		`1yd light, camera, remote control.`,
	],
	sz: 0
})
Cellphone.dur = 3600

export default Cellphone