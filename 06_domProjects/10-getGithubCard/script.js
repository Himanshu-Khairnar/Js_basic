const submit = document.getElementById("submit");
const input = document.getElementById("github-username");
const div = document.getElementById("card");
submit.addEventListener("click", async () => {
  let value = input.value.trim();
  await getGithubData(value);
});

async function getGithubData(value) {
  const res = await fetch(`https://api.github.com/users/${value}`);
  const data = await res.json();
 
    div.innerHTML = `
        <img src="${data.avatar_url}" alt="GitHub Profile Picture">
        <h1>${data.login}</h1>
        <p>${data.bio ? data.bio : "No bio available"}</p>
        <p>Joined: ${new Date(data.created_at).toLocaleDateString()}</p>
        <a href="${data.html_url}" target="_blank">View Profile</a>
    `;
    div.style.display = "block";
}
