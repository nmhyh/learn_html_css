var courses = [
    'javascript',
    'PHP',
    'Ruby',
];

// var htmls = courses.map(function(course) {
//     return `<h2>${course}</h2>`;
// });

// console.log(htmls.join(''));

Array.prototype.mapCustom = function(callback) {
    let output = [], arrayLength = this.length;

    for (let i = 0; i < arrayLength; ++i) {
        let result = callback(this[i], i);
        output.push(result);
    }
    return output;
}

let htmls = courses.mapCustom(function(course) {
    return `<h2>${course}</h2>`;
})

// console.log(htmls.join(''));


Array.prototype.filterCustom = function(callback) {
    let output = [], arrayLength = this.length;
    for(let i = 0; i < arrayLength; ++i) {
        let result = callback(this[i], i);
        if (result) {
            output.push(this[i]);
        }
    }
    return output;
}

let htmlsFilter = courses.filterCustom(function(course) {
    return course == 'PHP';
});

console.log(htmlsFilter);


Array.prototype.findCustom = function(callback) {
    let arrayLength = this.length;
    for(let i = 0; i < arrayLength; ++i) {
        let result = callback(this[i], i);
        if (result) {
            return this[i];
        }
    }
}

let htmlsFind = courses.findCustom(function(course) {
    return course == 'PHP';
});

console.log(htmlsFind);