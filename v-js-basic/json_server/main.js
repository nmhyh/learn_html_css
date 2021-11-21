// var courseApi = 'http://localhost:3000/courses';

// fetch(courseApi)
//     .then((response) => {
//         return response.json();
//     })
//     .then((courses) => {
//         console.log(courses);
//     })
var coursesApi = 'http://localhost:3000/courses';

function start() {
    getCourses(renderCourses);

    handleCreateForm();
}

start();

// Functions
function getCourses(callback) {
    fetch(coursesApi)
        .then((response) => {
            return response.json();
        })
        .then(callback);
}

function createCourse(dataSend, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataSend),
    };
    fetch(coursesApi, options)
        .then((response) => {
            return response.json();
        })
        .then(callback);
}

function handleDeleteCourse(id) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    fetch(`${coursesApi}/${id}`, options)
        .then((response) => {
            response.json();
        })
        .then(() => {
            var courseItem = document.querySelector(`.course-item-${id}`);
            courseItem?.remove();
        });
}

function renderCourses(courses) {
    var listCoursesBlock = document.querySelector('#list-courses');
    var htmls = courses.map((course) => { 
        return `
            <li class="course-item-${course.id}">
                <h4>${course.name}</h4>
                <p>${course.description}</p>
                <button onClick="handleDeleteCourse(${course.id})">
                    Delete
                </button>
            </li>
        `;
    });

    listCoursesBlock.innerHTML = htmls.join('');
}

function handleCreateForm() {
    var createBtn = document.querySelector('#create');

    createBtn.onclick = function() {
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;
        console.log(name, description);
        var formData = {
            name: name,
            description: description,
        }

        createCourse(formData, () => {
            getCourses(renderCourses);
        });
    }
}
