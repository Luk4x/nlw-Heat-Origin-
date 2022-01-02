const linksSocialMedia = {
  github: 'Luk4x',
  youtube: 'channel/UCKIAhjkmwUSk6fJ-4OXZklg',
  instagram: 'lu_k4x'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('id')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()
getGitHubProfileInfo()

function getGitHubProfileInfo() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  fetch(url)
    .then(reponse => reponse.json())
    .then(data => {
      gitHubName.textContent = data.name
      gitHubBio.textContent = data.bio
      gitHubPhoto.src = data.avatar_url
      gitHubUrl.href = data.html_url
      gitHubLogin.textContent = data.login
    })
}
