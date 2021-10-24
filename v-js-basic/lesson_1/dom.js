// ------------------- Element -------------------
// let headingNode = document.getElementById('heading');
// let headingNode = document.querySelector('.box .heading-2');
// console.log('headingNode', headingNode);

// HTML colection
// console.log(document.forms['form-1'])

// console.log(document.anchors);
// let listItemNodes = document.querySelectorAll('.box-1 li');
// console.log(listItemNodes);

// let boxNode = document.querySelector('.box-1');
// Công việc 1: Sử dụng tới `boxNode`
// Công việc 2: Sử dụng tới các li elements là con của `.box-1`

// console.log(boxNode.querySelectorAll('li'));
// console.log(boxNode.querySelector('p'));

// ------------------- Attribute -------------------
// Truy xuất thuộc tính, truy xuất qua phương thức
// let headingElement = document.querySelector('h1');
// headingElement.setAttribute('data', 'test data')
// console.log(headingElement.getAttribute('data'));

// ------------------- Text -------------------
let headingElement = document.querySelector('h1');
// set
// headingElement.textContent = 'New Heading';
// trả về những gì thấy trên trình duyệt
// get
console.log(headingElement.innerText);
// trả về cả nội dung khi code
console.log(headingElement.textContent);
