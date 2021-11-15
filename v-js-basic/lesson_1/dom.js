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
// let headingElement = document.querySelector('h1');
// set
// headingElement.textContent = 'New Heading';
// trả về những gì thấy trên trình duyệt
// get
// console.log(headingElement.innerText);
// trả về cả nội dung khi code
// console.log(headingElement.textContent);



// ------------------- Thêm 1 element vào trong 1 element khác -------------------
// innerHTML, outerHTML
// let boxElement = document.querySelector('.box');
// boxElement.outerHTML = '<h1>Heading</h1>';
// console.log(boxElement);


// ------------------- DOM style -------------------
// let boxElement = document.querySelector('.box');

// Object.assign(boxElement.style, {
//     width: '200px',
//     height: '100px',
//     backgroundColor: 'green',
// })
// console.log(boxElement.style.width);


// ------------------- ClassList property -------------------
// let boxElement = document.querySelector('.box');
// boxElement.classList.add('red', 'blue');

// console.log(boxElement.classList.remove('red'));
// setInterval(() => {
//     boxElement.classList.toggle('red');
// }, 3000);


// ------------------- DOM event -------------------
// --------- Assign event using the element node ---------
// let h1Element = document.querySelectorAll('h1');
// for(let i in h1Element) {
//     h1Element[i].onclick = function(e) {
//         console.log(e.target);
//     }
// }

// --------- Input / select ---------
// let inputValue;
// let inputElement = document.querySelector('input[type="text"]');
// console.log(inputElement);

// inputElement.change = function(e) {
//     // inputValue = e.target.value;
//     console.log(e);
//     switch(e.which) {
//         case 27:
//             console.log('exit');
//             break;
//     }
// }

// --------- Key up / down ---------
// document.onkeydown = function(e) {
//     switch(e.which) {
//         case 27:
//             console.log('EXIT');
//             break;
//         case 13:
//             console.log('SEND CHAT');
//             break;
//     }
// }

// --------- preventDefault ---------
// let aElement = document.links;
// console.log(aElement);
// for(let i in aElement) {
//     aElement[i].onclick = function(e) {
//         console.log(e.target.href);
//         if(!e.target.href.startsWith('https://f8.edu.vn')) {
//             e.preventDefault();
//         }
//     }
// }
// let ulElement = document.querySelector('ul');
// ulElement.onmousedown = function(e) {
//     e.preventDefault();
// }
// ulElement.onclick = function(e) {
//     console.log(e.target);
// }

// --------- stopPropagation ---------
document.querySelector('div').onclick = function() {
    console.log('DIV');
}

document.querySelector('button').onclick = function(e) {
    e.stopPropagation();
    console.log('click me!');
}