// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((users) => {
//         console.log(users)
//         users.forEach(user => {
//             console.log(user.name)
//         });
//     });


// fetch("https://api.github.com/users/andrewmitty")
//     .then(response => response.json())
//     .then(info => {
//         console.log(info)
//         console.log("Number of public git repos: " + info.public_repos)
//         console.log("Number of followers: " + info.followers)
//         fetch(info.followers_url)
//             .then(response => response.json())
//             .then((followers) => {
//                 // console.log(followers)
//                 followers.forEach(user => {
//                     console.log(user.id)
//                 })
//             })
//     });


// // Task 2

// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(response => response.json())
//     .then(comments =>
//         console.log("Number of Comments: " + comments.length))

// fetch('https://jsonplaceholder.typicode.com/photos')
//     .then(response => response.json())
//     .then(comments =>
//         console.log("2.2 \nNumber of Photos: " + comments.length))

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((users) => {
//         console.log(users)
//         console.log("2.3")
//         users.forEach(user => {
//             console.log("name: " + user.name + " email: " + user.email)
//         });
//     });

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((users) => {
//         // console.log(users)
//         console.log("2.4")
//         users.forEach(user => {
//             console.log("name: " + user.name + " City: " + user.address.city)
//         });
//     });

fetch("https://jsonplaceholder.typicode.com/todos?completed=true")
    .then(response => response.json())
    .then(data => console.log("2.5\nTotal number of completed todos: " + data.length))

// fetch("https://jsonplaceholder.typicode.com/todos?completed=true")
//     .then(response => response.json())
//     .then(data => {
//         console.log("2.6")
//         console.log(data)
//         data.forEach(todo =>
//             console.log("todo title: " + todo.title + " id: " + todo.id))
//     });


// fetch("https://jsonplaceholder.typicode.com/todos?completed=false")
//     .then(response => response.json())
//     .then(data => {
//         console.log("2.7")
//         data.forEach(todo => {
//             fetch("https://jsonplaceholder.typicode.com/users?id=" + todo.userId)
//                 .then(userResponse => userResponse.json())
//                 .then(userData =>
//                     console.log("id: " + todo.id + " user: " + userData[0].name)
//                 )

//         })
//     });

// fetch('https://jsonplaceholder.typicode.com/albums')
//     .then(response => response.json())
//     .then(data => {
//         data.forEach(album => {
//             if (album.title == "quidem molestiae enim") {
//                 fetch("https://jsonplaceholder.typicode.com/users?id=" + album.userId)
//                     .then(userResponse => userResponse.json())
//                     .then(userData => console.log("2.8\n" + userData[0].name))
//             }
//         })
//     })