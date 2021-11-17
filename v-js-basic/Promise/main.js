// ex: callback hell
// setTimeout(() => {
//     console.log(1);
//     setTimeout(() => {
//         console.log(2);
//         setTimeout(() => {
//             console.log(3);
//             setTimeout(() => {
//                 console.log(4);    
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

// Cách tạo 1 promise
// 1. new Promise
// 2. Executor

// Các trạng thái của promise
// 1. Pendding
// 2. Fulfilled
// 3. Rejected

// var promise = new Promise(
//     // executor
//     // resolve -> success
//     // reject -> fail
//     function(resolve, reject) {
//         // Logic
//         // Thành công: resolve()
//         // Thất bại: reject()

//         // Fake call API
//         // resolve([
//         //     {
//         //         id: 1,
//         //         name: 'Javascript'
//         //     }
//         // ]);
//         // reject('Error');
//         resolve();
//     }
// );
// Promise chain
// promise
//     .then(function() {
//         return new Promise((resolve) => {
//             setTimeout(() => resolve([1, 2, 3]), 3000);
//         });
//     })
//     .then(function(data) {
//         console.log(data);
//         return 2;   
//     })
//     .catch(function(error) {
//         console.log('Fail!', error);    
//     })
//     .finally(function() {
//         console.log('Done!');    
//     });

// function sleep(ms) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, ms);
//     });
// }

// sleep(1000)
//     .then(() => {
//         console.log(1);
//         return sleep(1000);
//     })
//     .then(() => {
//         console.log(2);
//         return new Promise((resolve, reject) => {
//             reject('Có lỗi');
//         });
//     })
//     .then(() => {
//         console.log(3);
//         return sleep(1000);
//     })
//     .then(() => {
//         console.log(4);
//         return sleep(1000);
//     })
//     .catch((e) => {
//         console.log(e);
//     });

// var promise = Promise.reject('Error');

// promise
//     .then((result) => {
//         console.log('result: ', result);
//     })
//     .catch((err) => {
//         console.log('err: ', err);
//     })

// var promise1 = new Promise((resolve) => {
//     setTimeout(() => {
//        resolve([1]) 
//     }, 1000);
// });

// var promise2 = Promise.reject('Co loi!')

// Promise.all([promise1, promise2])
//     .then(([result1, result2]) => {
//         console.log(result1.concat(result2));
//     })
//     .catch((e) => {
//         console.log(e);
//     })

// *************** Test Promise ***************
setTimeout(() => console.log('a'));

Promise.resolve()
    .then(() => console.log('b'))
    .then(() => Promise.resolve('c')
                    .then((data) => {
                        setTimeout(() => console.log('d'));
                        console.log('f');
                        return data;
                    }
            )
    )
    .then(data => console.log(data));