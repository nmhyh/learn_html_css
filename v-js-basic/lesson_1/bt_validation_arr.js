
let validation = [
	{ key: 1, value: "required" },
	{ key: 1, value: "isEmail" },
	{ key: 2, value: "required" },
	{ key: 1, value: "isNumber" },
	{ key: 2, value: "isEmail" },
	{ key: 3, value: "isEmail" },
];
console.log("input", JSON.parse(JSON.stringify(validation)));
let temp = [];
// case 1
for (let index = 0; index < validation.length; index++) {
	if (temp.length === 0 || !temp.includes(validation[index].key)) {
		temp.push(validation[index].key);
		continue;
	}
	let indexOfValidationHasExist = validation.findIndex(
		(element) => element.key === validation[index].key
	);
	if (!Array.isArray(validation[indexOfValidationHasExist].value)) {
		validation[indexOfValidationHasExist].value = [
			validation[indexOfValidationHasExist].value,
			validation[index].value,
		];
	} else {
		validation[indexOfValidationHasExist].value.push(validation[index].value);
	}
	validation.splice(index, 1);
	index = index - 1;
}
console.log("output", validation);

// case 2
let useReduce = JSON.parse(JSON.stringify(validation)).reduce((init, currentRule) => {
	if (Array.isArray(init[currentRule.key])) {
		init[currentRule.key].push(currentRule.value);
	} else {
		init[currentRule.key] = [];
		init[currentRule.key].push(currentRule.value);
	}
	return init;
}, {});
console.log('useReduce', useReduce);