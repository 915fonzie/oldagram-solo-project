const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const bodyEl = document.body

function appendSection(arr) {
    let boxes = ""

    for(let i = 0; i < arr.length; i++){
        let post = arr[i]
        boxes += `
        <div class="container top-section">
            <img class="avatar" src=${post.avatar}>
            <h1 class="name">${post.name}</h1>
            <h2 class="location">${post.location}</h2>
        </div>
        <div class="container">
            <img class="post-image" src=${post.post}>
        </div>
        <div class="container">
            <div class="likes-and-comments">
                <img class="icon likes" src="images/icon-heart.png">
                <img class="icon" src="images/icon-comment.png">
                <img class="icon" src="images/icon-dm.png">
                <h1 id="likes-${i}">${post.likes} likes</h1>
                <p><span class="bold">${post.username}</span> ${post.comment}</p>
            </div>
        </div>
        `
    }
    bodyEl.innerHTML += boxes;
}

appendSection(posts)

