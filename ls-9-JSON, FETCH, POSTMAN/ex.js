var courseApi = 'http://localhost:3000/course';

function start() {
    getCourses(renderCourses);

    handleCreateForm();
}

start();

//* Functions

function getCourses(callback) {
    fetch(courseApi)
        .then((response) => {
            return response.json();
        })
        .then(callback);
}

function createCourse(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
    }
    fetch(courseApi, options)
        .then((response) => {
            response.json();
        })
        .then(callback);

}

function handleDeleteCourse(id) {
    var options = {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        }
    }
    fetch(courseApi + '/' + id, options)
        .then((response) => {
            response.json();
        })
        .then(() => {
            var courseItem = document.querySelector('.course-item-' + id);
            if (courseItem) {
                courseItem.remove();
            }
        });
}

function handleUpdateCourse(id) {
    var courseItem = document.querySelector('.course-item-' + id);
    var name = courseItem.querySelector('h4').textContent;
    var description = courseItem.querySelector('p').textContent;

    var form = `
    <div name='create-form'>
        <input type="text" name="edit-name" value="${name}">
        <input type="text" name="edit-description" value="${description}">
        <button onclick="updateCourse(${id})">Save</button>
        <button onclick="cancelUpdateCourse(${id})">Cancel</button>
    </div>
    `;

    courseItem.innerHTML = form;
}

function renderCourses(courses) {
    var listCourseBlock = document.querySelector('#list-courses');
    var htmls = courses.map((course) => {
        return `
        <li class="course-item-${course.id}">
            <h4>${course.name}</h4>
            <p>${course.description}</p>
            <button onclick="handleDeleteCourse(${course.id})">Delete</button>
            <button onclick="handleUpdateCourse(${course.id})">Update</button>
        </li>
        `;
    })
    listCourseBlock.innerHTML = htmls.join('');
}

function handleCreateForm() {
    var createBtn = document.querySelector('#create');
    createBtn.onclick = () => {
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;
        var formData = {
            name: name,
            description: description
        };
        createCourse(formData, () => {
            getCourses(renderCourses);
        });
    }
}

function updateCourse(id) {
    var courseItem = document.querySelector('.course-item-' + id);
    var name = courseItem.querySelector('input[name="edit-name"]').value;
    var description = courseItem.querySelector('input[name="edit-description"]').value;

    var data = {
        name: name,
        description: description
    }

    var options = {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
    };

    fetch(courseApi + '/' + id, options)
        .then((response) => {
            return response.json();
        })
        .then((course) => {
            var courseHtml =
                `<div>
                    <h4>${course.name}</h4>
                    <p>${course.description}</p>
                    <button onclick="handleDeleteCourse(${course.id})">Delete</button>
                    <button onclick="handleUpdateCourse(${course.id})">Update</button>
                </div>`
            courseItem.innerHTML = courseHtml;
        });
}

function cancelUpdateCourse() {
    getCourses(renderCourses);  
}

function cancelCourse() {
    var createForm = document.querySelector('div[name="create-form"]');
    if(createForm) {
        createForm.remove();
    }
}

