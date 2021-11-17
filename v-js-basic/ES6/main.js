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

const Course = function(name, price) {
	this.name = name;
	this.price = price;
}

const jsCourse = new Course('Javascipt', 100);
console.log(jsCourse);