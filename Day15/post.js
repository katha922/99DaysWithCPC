function loadposts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))

}
//to get element where i want to add
//1.create child element
//2.set innerHTML or innerText
//appendChild

function displayPosts(posts){
    const postsContainer=document.getElementById('posts-container');
    for(const post of posts){
        const div = document.createElement('div');
        div.classList.add('post');  //to add class
        div.innerHTML=`
        <h3>User-${post.userId}</h3>
        <h4>Post: ${post.title}</h4>
        <p>Post Description: ${post.body}</p>
        `;
        postsContainer.appendChild(div);

    }

}


loadposts();