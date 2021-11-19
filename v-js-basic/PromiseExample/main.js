var users = [
    {
        id: 1,
        name: 'Kiem Dam'
    },
    {
        id: 2,
        name: 'Son Dang'
    },
    {
        id: 3,
        name: 'Hung Dam'
    },
    // ...
];

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Anh Son chua ra video :(',
    },
    {
        id: 2,
        user_id: 2,
        content: 'Vua ra xong em oi!',
    },
    {
        id: 3,
        user_id: 1,
        content: 'Cam on anh ^^',
    },
]

// 1. Get comments
// 2. Từ comments lấy ra user_id
// 3. Từ user_id lấy ra user tương ứng

// fake api

function getComments() {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(comments);
        }, 1000)
    })
}

function getUsersById(userIds) {
    return new Promise((resolve, reject) => {
        var result = users.filter((user) => userIds.includes(user.id));
        setTimeout(() =>{
            resolve(result);
        }, 1000)
    }, 1000)
}
// Callback hell
// Promise hell
getComments()
    .then((comments) => {
        var userIds = comments.map((comment) => comment.user_id);

        return getUsersById(userIds)
            .then((users) => {
                return {
                    users: users,
                    comments: comments,
                }
            })
    })
    .then((data) => {
        console.log(data);
        var commentBlock = document.getElementById('comment-block');
        var html = '';
        data.comments.forEach((comment) => {
            var user = data.users.find(userEle => userEle.id === comment.user_id);
            html += `<li>${user.name}: ${comment.content}</li>`;
        })

        commentBlock.innerHTML = html;
    })

