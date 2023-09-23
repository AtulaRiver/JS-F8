//* API (URL) -> Application programming interface: Cổng giao tiếp giữa các phần mềm

//* BE -> API -> Fetch -> JSON/XML

//* -> Json.parse -> JS types
//* -> render ra giao diện HTML

var postApi = 'https://jsonplaceholder.typicode.com/posts';

fetch(postApi)
    .then((response) => {
        return response.json();
        //* JSON.parse -> JS types
    })
    .then((posts) => {
        var htmls = posts.map((post) => {
            return `<li>
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            </li>`
        });
        var html = htmls.join('');
        document.getElementById("post-block").innerHTML = html;
    })

var courseApi = 'http://localhost:3000/course';

fetch(courseApi)
    .then((response) => {
        return response.json();
    })
    .then((courses) => {
        console.log(courses);
    })

//* CRUD
//* Create -> POST
//* Read -> GET
//* Update -> PUT/PATCH
//* Delete -> DELETE

//* Postman 
//* 