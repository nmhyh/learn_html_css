var btn = document.getElementById('btn');
console.log(btn);
// btn.onclick = function() {
//     // Viec 1
//     console.log('Viec 1');

//     // Viec 2
//     console.log('Viec 2');

//     // Viec 3
//     alert('Viec 3');
// }
// setTimeout(() => {
//     btn.onclick = function() {}
// }, 3000);

// btn.addEventListener('click', function() {
//     console.log(Math.random());
// })

function viecLam() {
    console.log('Viec 1');
}

function viecLam2() {
    console.log('Viec 2');
}

btn.addEventListener('click', viecLam);
btn.addEventListener('click', viecLam2);

setTimeout(() => {
    btn.removeEventListener('click', viecLam)
}, 3000);
