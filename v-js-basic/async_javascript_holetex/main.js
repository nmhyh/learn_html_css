// Ex về code bất đồng bộ
// function test() {
// 	setTimeout(() => {
// 		console.log('1');
// 	}, 0);
// 	console.log('2');
// 	console.log('3');
// }

// ************************ Callback ************************
// function httpGetAsync(thenUrl, callback) {
// 	var xmlHttp = new XMLHttpRequest();
// 	xmlHttp.onreadystatechange = function () {
// 		if (xmlHttp.readyState == 4 && xmlHttp.status == 200) callback(xmlHttp);
// 	}

// 	xmlHttp.open("Get", thenUrl, true);
// 	xmlHttp.send(null);
// }

// httpGetAsync('https://picsum.photos/50/50', (data) => {
// 	console.log(data);
// 	document.getElementById('img_1').setAttribute('src', data.responseURL);

// 	httpGetAsync('https://picsum.photos/50/50', (data) => {
// 		console.log(data);
// 		document.getElementById('img_2').setAttribute('src', data.responseURL);

// 		httpGetAsync('https://picsum.photos/50/50', (data) => {
// 			console.log(data);
// 			document.getElementById('img_3').setAttribute('src', data.responseURL);
// 		})
// 	})
// })

// test();

// ************************ PROMISE ************************
function httpGetAsync(thenUrl, resolve) {
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function () {
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200) resolve(xmlHttp);
	}
	xmlHttp.open("Get", thenUrl, true);
	xmlHttp.send(null);
}

const currentPromise = new Promise((resolve, reject) => {
  httpGetAsync('https://picsum.photos/50/50', resolve)
});

const promise2 = new Promise((resolve, reject) => {
  httpGetAsync('https://picsum.photos/50/50', resolve)
});

const promise3 = new Promise((resolve, reject) => {
  httpGetAsync('https://picsum.photos/50/50', resolve)
});

const executeAsync = async () => {
	try {
		const response = await currentPromise;
		document.getElementById('img_1').setAttribute('src', response.responseURL);
		console.log({response});

		const response2 = await promise2;
		document.getElementById('img_2').setAttribute('src', response2.responseURL);
		console.log({response2});

		const response3 = await promise3;
		document.getElementById('img_3').setAttribute('src', response3.responseURL);
		console.log({response3});
	} catch(err) {
		console.log(err);
	}
}
executeAsync();

// chaining
// currentPromise
//   .then((data) => {
//     console.log(data);
// 		document.getElementById('img_1').setAttribute('src', data.responseURL);
// 		return promise2;
//   })
// 	.then((data) => {
// 		document.getElementById('img_2').setAttribute('src', data.responseURL);
// 		return promise3;
// 	})
// 	.then((data) => {
// 		document.getElementById('img_3').setAttribute('src', data.responseURL);
// 	})
//   .catch((e) => {
//     console.log(e);
//   });
