var postAPI =
    'https://jsonplaceholder.typicode.com/posts';

// strem
fetch(postAPI)
    .then((response) => {
        return response.json();
        // JSON.parse: JSON -> Javascript types
    })
    .then((posts) => {
        var htmls = posts.map((post) => 
            `<li>
                <h2>${post.title}</h2>
                <p>${post.title}</p>
            </li>`
        );
        var html = htmls.join('\n');
        document.getElementById('posts-block').innerHTML = html;
    })
    .catch((err) => {
        console.log(err);
    });