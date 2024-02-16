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


for(let i = 0; i < posts.length; i++){
    let postInfo = posts[i]
    topSection(postInfo.avatar, postInfo.name, postInfo.location, bodyEl)
    midSection(postInfo.post)
    lowerSection(postInfo.username, postInfo.likes, postInfo.comment)

}


function topSection(avatar, name, location) {
    const section = document.createElement("section")
    section.innerHTML = `
    <div class="container top-section">
        <img class="avatar" src=${avatar}>
        <h1 class="name">${name}</h1>
        <h2 class="location">${location}</h2>
    </div>
    `
    bodyEl.appendChild(section)
}

function midSection(postImg) {
    const section = document.createElement("section")
    section.innerHTML = `
    <div class="container">
        <img class="post-image" src=${postImg}>
    </div>
    `
    bodyEl.appendChild(section)
}

function lowerSection(username, likes, comment){
    const section = document.createElement("section")
    section.innerHTML = `
    <div class="container">
        <div class="likes-and-comments">
            <img class="icon" src="images/icon-heart.png">
            <img class="icon" src="images/icon-comment.png">
            <img class="icon" src="images/icon-dm.png">
            <h1>${likes} likes</h1>
            <p><span class="bold">${username}</span> ${comment}</p>
        </div>
    </div>
    `
    bodyEl.appendChild(section)
}

