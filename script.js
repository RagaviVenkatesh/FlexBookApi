let page = 1;
const limit = 6;

function loadPosts() {
  fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
  )
    .then((res) => res.json())
    .then((posts) => {
      posts.forEach((post) => {
        const postCard = document.createElement("div");
        postCard.className = "post";
        postCard.innerHTML = `
          <img src="https://picsum.photos/seed/${
            post.id + page
          }/400/250" alt="Post Image" />
          <p>${post.body.substring(0, 80)}...</p>
        `;
        document.getElementById("postContainer").appendChild(postCard);
      });
      page++;
    })
    .catch((err) => {
      console.error("Failed to load posts:", err);
      alert("Could not load posts. Try again later.");
    });
}

document.getElementById("loadMore").addEventListener("click", loadPosts);

document.addEventListener("DOMContentLoaded", () => {
  loadPosts(); // initial load
});
