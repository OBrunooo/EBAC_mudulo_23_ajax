document.addEventListener('DOMContentLoaded', function() {
    const name = document.getElementById('name');
    const avatar = document.getElementById('avatar');
    const username =  document.getElementById('username');
    const repos = document.getElementById('repos');
    const seguidores = document.getElementById('seguidores');
    const seguindo = document.getElementById('seguindo');
    const link = document.getElementById('link');

    fetch('https://api.github.com/users/OBrunooo')
        .then(function(res) {
            return res.json();
        })
        .then(function(json) {
            name.innerText = json.name;
            avatar.src = json.avatar_url;
            username.innerText = "@" + json.login;
            repos.innerText = json.public_repos;
            seguidores.innerText = json.followers;
            seguindo.innerText = json.following;
            link.href = json.html_url
        })
})