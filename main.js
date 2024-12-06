document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.getElementById('name');
    const usernameElement = document.getElementById('username');
    const avatarElement = document.getElementById('avatar');
    const reposElement = document.getElementById('repos');
    const followersElement = document.getElementById('followers');
    const followingElement = document.getElementById('following');
    const linkElement = document.getElementById('link');

    fetch('https://api.github.com/users/GabrielAssisDev')
    .then(function (res) {
        return res.json();
    })
    .then(function (json) {
        nameElement.innerText = json.name;
        usernameElement.innerText = json.login;
        avatarElement.scr = json.avatar_url;
        followersElement.innerText = json.followers;
        followingElement.innerText = json.following;
        reposElement.innerText = json.public_repos;
        linkElement.href = json.html_url;
    })
})