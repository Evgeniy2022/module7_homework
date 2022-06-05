/*
//Задание 1
const objLink = {
	city: "Omsk",
	money: 1000000,
};

const anotherCity = objLink;
anotherCity.ownCity = "Tomsk"
anotherCity.ownMoney = 10000000;

console.log(anotherCity)

//Задание 2
const objLink = {
	city: "Omsk",
	money: 1000000,
};

function findString(obj, string) {
	if (Object.values(obj).includes(string)){
		return true
	}else{
		return false
	}
}
console.log(findString(objLink, "Omsk")) 


//Задание 3
const obj = Object.create(null)

//Задание 4
function Appliances(designation) {
	this.device = 'device',
		this.name = designation
}

Appliances.prototype.getStatus = function (status) {
	console.log(`this device is ${status}`)
}

function ElectricalAppliances(power, designation) {
	this.power = power,
		this.name = designation
}

ElectricalAppliances.prototype = new Appliances()

let fridge = new ElectricalAppliances('200 ватт/час', 'fridge');

fridge.getStatus('switchedOn')
console.log(fridge)


let kettle = new Appliances('500 ватт/час', 'kettle');

kettle.getStatus('switchedOff')
console.log(kettle)
*/