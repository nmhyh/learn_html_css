// Code block: if else, loop, {}, ...

// {
// 	let course = 'Javascript basic!';

// 	{
// 		{
// 			let course = 123;
// 			console.log(course);

// 		}
// 	}
// }

// const a = {
// 	name: 'JS'
// }
// a.nameNew = 'PHP'
// console.log(a.name);

// Arrow function
// const logger = log => {
// 	console.log(log);
// }
// logger('Message...');

// const sum = (a, b) => a + b;
// const object = (a, b) => ({
// 	a: a,
// 	b: b,
// });
// console.log(sum(2, 2));

// const course = {
// 	name: 'Javascript basic!',
// 	getName: () => {
// 		return this; // context
// 	}
// }

// console.log(course.getName());

// const Course = function(name, price) {
// 	this.name = name;
// 	this.price = price;
// }

// const jsCourse = new Course('Javascipt', 100);
// console.log(jsCourse);

// *********************** Classes ***********************
// function Course(name, price) { 
// 	this.name = name;
// 	this.price = price;
// 	this.getName = function() { return this.name;}
// 	const isSuccess = false;
// }
// class Course {
// 	constructor(name, price) {
// 		this.name = name;
// 		this.price = price;
// 	}

// 	getName() { 
// 		return this.name;
// 	}

// 	getPrice() {
// 		return this.price;
// 	}

// 	run() {
// 		const isSuccess = false;

// 		if(true) {
// 			isSuccess = true;
// 		}
// 	}
// }

// const phpCourses = new Course('PHP', 1000);
// const jsCourses = new Course('Javascipt', 1200);

// console.log(phpCourses);
// console.log(jsCourses);

// *********************** Enhanced object literals ***********************
// var name = 'Javascript';
// var price = 1000;
// var course = {
// 	name,
// 	price,
// 	getName() {
// 		return name;
// 	}
// };

// console.log(course.getName());

// var fieldName = 'name';
// var fieldPrice = 'price';

// const course = {
// 	[fieldName]: 'Javascript',
// 	[fieldPrice]: 1000,
// }

// console.log(course);

// *********************** Destructuring ***********************
// var array = ['Javascript', 'PHP', 'Ruby'];

// var [a, b, ...rest] = array;
// console.log(a);

// console.log(rest);

// var course = {
// 	name: 'Javascript',
// 	price: 1000,
// 	image: 'image-address',
// 	// children: {
// 	// 	name: 'ReactJS',
// 	// }
// }

// var {name: parentName, children: { name }} = course;
// var {name, description = 'default description'} = course;
// console.log(name);
// console.log(description);

// function logger([a, b, ...rest]) {
// 	console.log(a);
// 	console.log(b);
// 	console.log(rest);
// }

// logger([2, 6, 12, 3, 4, 4])

// var array = ['Javascript', 'Ruby', 'PHP'];
// var array2 = ['ReactJS', 'Dart'];
// var array3 = [...array, ...array2];
// console.log(array3);

// var object1 = {
// 	name: 'Javascript',
// };

// var object2 = {
// 	price: 1000,
// }

// var object3 = {
// 	...object1,
// 	...object2,
// }

// console.log(object3);

// var defaultConfig = {
// 	apiVersion: 'v1',
// 	orther: 'orther',
// }

// var exerciseConfig = {
// 	...defaultConfig,
// 	api: 'http://localhost:8080',
// }
// console.log(exerciseConfig);

// var array = ['Javascipt', 'PHP', 'Ruby'];

// function logger(...rest) {
// 	for (var element of rest) {
// 		console.log(element);
// 	}
// }
// logger(...array);

// *********************** Tagged template literal ***********************
// function highlight([first, ...strings], ...values) {
// 	console.log(first, strings, values);
// 	return values.reduce(
// 		(acc, curr) => 
// 			[...acc, `<span>${curr}</span>`, strings.shift()],
// 			[first]
// 	).join('');
// }
// // Học lập trình <span>Javascipt</span> tại <span>F8</span>!
// var brand = 'F8';
// var course = 'Javascipt';

// const html = highlight`Học lập trình ${course} tại ${brand}!`;

// console.log(html);

// *********************** Modules ***********************
// import { loggerNew } from './logger/index.js';
// import * as constants from './constants.js'

// console.log(constants);
// console.log(loggerNew('Test message...'));
// console.log(logger('Test message...', TYPE_WARN));
// console.log(logger('Test message...', TYPE_ERROR));

// *********************** Optional chaining ***********************
// const obj = {
// 	name: 'Alice',
// 	cat: {
// 		name: 'Dinah',
// 		cat2: {
// 			name: 'Dinah 2'
// 		}
// 	}
// }

// console.log(obj.cat?.cat2);

const obj = {
	// getName(value) {
	// 	console.log(value);
	// }
}
obj.getName?.(123)
