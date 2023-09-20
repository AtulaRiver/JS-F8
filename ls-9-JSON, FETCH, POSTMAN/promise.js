//* Promise
//* Sync: Đông bộ
//* Async: Bất đông bộ
//* setTimeout, setInterval, fetch, XMLHttpRequest, fileReading, requestAnimation fram

//* Callback hell
// setTimeout(() => {
//     console.log(1);
//     setTimeout(() => {
//         console.log(2);
//         setTimeout(() => {
//             console.log(3);
//             setTimeout(() => {
//                 console.log(4);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);
//* Pyramid of doom

//* Có 3 trạng thái
//* 1. Pending(rò rỉ bộ nhớ)
//* 2. Fulfilled(Thành công)
//* 3. Rejected(Thất bại)
var promise = new Promise(
    //* Excutor
    (resolve, reject) => {
        //* Logic
        //* Thành công: resolve()
        //* Thất bại: reject()
        resolve();
    }
)

//* Chain

// promise 
//     .then(() => {
//         return new Promise((resolve) => {
//             setTimeout(resolve, 3000);
//         });
//     }) 

//     .then((data) => {
//         console.log(data);
//     }) 
//     .catch(() => {
//         console.log("Failure");
//     })
//     .finally(() => {
//         console.log("Done");
//     })


// function sleep(ms) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, ms);
//     })
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
//         })
//     })
//     .then(() => {
//         console.log(3);
//         return sleep(1000);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

//* 1. Promise.resolve
//* 2. Promise.reject
//* 3. Promise.all

// var promise = new Promise((resolve, reject) => {
//     // resolve('Success');
//     reject('Failed');
// });

// var promise = Promise.reject('Success');

// promise
//     .then((result) => {
//         console.log('Result:', result);
//     })
//     .catch((err) => {
//         console.log('Result:', err);
//     })

// var promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve([1])
//     }, 2000)
// })

// var promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve([2, 3])
//     }, 5000);
// })

// var promise3 = Promise.reject('Loi~');

// Promise.all([promise1, promise2, promise3])
//     .then((result) => {
//         var result1 = result[0];
//         var result2 = result[1];
//         console.log(result1.concat(result2));
//     })
//     .catch((err) => {
//         console.log(err);
//     })

//* 1. Lấy comments
//* 2. Từ comments lấy ra user_id
//* 3. Từ user_id lấy ra id tương ứng

var users = [
    {
        id: 1,
        name: 'Jang',
    },
    {
        id: 2,
        name: 'River',
    },
    {
        id: 3,
        name: 'Giang',
    }
];

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Dep Trai'
    },
    {
        id: 2,
        user_id: 2,
        content: 'VL'
    }
];

function getComments() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(comments);
        }, 1000) 
    })
}

function getUsersById(userIds) { 
    return new Promise((resolve) => {
        var result = users.filter((user) => {
            return userIds.includes(user.id);
        })
        setTimeout(() => {
            resolve(result);
        }, 1000);
    });
}

getComments()
    .then((comments) => {
        var userIds = comments.map((comments) => {
            return comments.user_id;
        }) 
        return getUsersById(userIds)
            .then((users) => {
                return {
                    user: users,
                    comments: comments
                };
            })
    })
    .then((data) => {
        var commentBlock = document.querySelector('#comment-block');
        var html = '';
        data.comments.forEach((comment) => { 
            var user = data.user.find((user) => {
                return user.id === comment.user_id;
            });
            html += `<li>${user.name}: ${comment.content}</li>`
        });

        commentBlock.innerHTML = html;
    })  



