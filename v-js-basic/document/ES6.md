## ECMAScript 6 - ECMAScript 2015 - ES6
	1. Let, const
	2. Template Literals
	3. Multi-line String
	4. Arrow function
	5. Classes
	6. Default parameter values
	7. Destructuring
	8. Rest parameters
	9. Spread
	10. Enhanced object literals
	11. Tagged template literal
	12. Modules
	13. Optional chaining (?.)

## Var / Let, Const:
	- Scope, Hosting
	- Const / Var, Let: Assignment

## Arrow function
	Ex: 
		const logger = log => {
			console.log(log);
		}
		logger('Message...');

		const sum = (a, b) => a + b;
		const object = (a, b) => ({
			a: a,
			b: b,
		});
		console.log(sum(2, 2));
	
## Classes
function Course(name, price) {
	this.name = name;
	this.price = price;
}

const phpCourses = new Course('PHP', 1000);
const jsCourses = new Course('Javascipt', 1200);

console.log(phpCourses);
console.log(jsCourses);

## Enhanced object literals
	1. Định nghĩa key: value cho object
	2. Định nghĩa method cho object
	3. Định nghĩa key cho object dưới dạng biến
	Ex:
		var name = 'Javascript'
		var price = 1000
		var course = {
			name: name,
			price: price
		}

		console.log(course);

## Destructuring
	Ex:
		var array = ['Javascript', 'PHP', 'Ruby'];
		var [a, b, ...rest] = array;
		console.log(a);
		console.log(rest);

## Tagged template literal
	Ex:
		function highlight([first, ...strings], ...values) {
			console.log(first, strings, values);
			return values.reduce(
				(acc, curr) => 
					[...acc, `<span>${curr}</span>`, strings.shift()],
					[first]
			).join('');
		}
		// Học lập trình <span>Javascipt</span> tại <span>F8</span>!
		var brand = 'F8';
		var course = 'Javascipt';

		const html = highlight`Học lập trình ${course} tại ${brand}!`;

		console.log(html);

## Optional chaining
	- obj.val?.prop
	- obj.val?.[expr]
	- obj.arr?.[index]
	- obj.func?.(args

