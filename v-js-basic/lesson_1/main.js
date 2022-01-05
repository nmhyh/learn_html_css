// let myString = "hoc js tai js f8!";

// console.log('myString length', myString.length);

// console.log('myString indexOf', myString.search ('js'));

// console.log('myString cut', myString.slice(-3, -1));

// console.log('myString place', myString.replace(/js/g, 'javascipt'));
// let languages = 'PHP, JS, Ruby'
// console.log(languages.charAt());

let validation = [
	{key: 1, value: 'required'},
	{key: 1, value: 'required'},
	{key: 2, value: 'required'},
]
let temp = []
for (let ele of validation) {
	if (temp.length === 0) {
		temp.push(ele.key)
		continue;
	}
	if(temp.includes(validation.key)) {
		console.log(temp, validation.key);
	}
}
