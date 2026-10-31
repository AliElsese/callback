// API => URL
// Base url + endpoint
// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/comments

// Method api
// GET
// POST
// PUT
// DELETE

// AJAX
function getUsers(callback) {
    let myHttp = new XMLHttpRequest();
    myHttp.open("GET", "https://jsonplaceholder.typicode.com/users");
    myHttp.send();
    myHttp.addEventListener("readystatechange", () => {
        if (myHttp.readyState === 4) {
            console.log("Users", JSON.parse(myHttp.response))    // string
            callback()
        }
    })

}
function getPosts(callback) {
    let myReq = new XMLHttpRequest();
    myReq.open("GET", "https://jsonplaceholder.typicode.com/posts");
    myReq.send();
    myReq.addEventListener("loadend", () => {
        console.log("Posts", JSON.parse(myReq.response))
        callback();
    })
}
function getPhotos(callback) {
    let myReq = new XMLHttpRequest();
    myReq.open("GET", "https://jsonplaceholder.typicode.com/photos");
    myReq.send();
    myReq.addEventListener("loadend", () => {
        if (myReq.status === 200) {
            console.log("Photos", JSON.parse(myReq.response))
            callback();
        }
    })
}
function endApis() {
    console.log("Apis Ended Success");
}
// getUsers();
// getPosts();
// getPhotos();
// Callback hell
// getPosts(() => {
//     getPhotos(() => {
//         getUsers(() => {
//             endApis()
//         })
//     })
// })

// Promises

// pending
// success
// error

function one(x) {
    console.log("one")

    x();    // callback
}

function two() {
    console.log("two")
}

one(two)