/* notes for fetching data from APIs */
// need to call api 
let githuburl = 'https://api.github.com/users/';
// tgt element for search value, main, and form
const main = document.getElementById('main');
const form = document.getElementById('form');
const searchTerm = document.getElementById('search');
// make a function to get data from api
async function getUsers(username){
    try {
        const res = await axios(githuburl + username)
        createUserCard(res.data)
       // getRepos(username)
        console.log(res.data)
    }catch(err){
        if(err.response.status == 404){
            createErrorCard("no problem fetching repo")
        }
        
    }      
}

//get user repos function
// async function getRepos(username) {
//     try {
//         const res = await axios(githuburl + username + '/repos?sort=created')
//         addReposToCard(res.data)
//         console.log(res.data)
//     }catch(err){
//         if(err){
//             createErrorCard("no profile with this username")
//         }
        
//     } 
// }

//display data - create user card
function createUserCard(user){
    const cardHTML = `<div class="card">
    <div>
        <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
    </div>
    <div class="user-info">
        <h2>${user.name}</h2>
        <p>${user.bio}</p>
        <ul>
            <li>${user.followers} <strong>followers</strong></li>
            <li>${user.following} <strong>following</strong></li>
            <li>${user.public_repos} <strong>repos</strong></li>
        </ul>
            <div id="repos">
                
            </div>
        </div>
    </div> `

    main.innerHTML = cardHTML
}

function createErrorCard(msg){
    const cardHTML = `
    <div class="card">
        <h3>${msg}</h3>
    </div>
    `

    main.innerHTML = cardHTML;
}
//repos function to display repos
// function addReposToCard(repos){
//     const reposEL = document.getElementById('repos');
//     repos
//     .slice(0,5)
//     .forEach(repo => {
//         repo.classList.add('a')
//         repo.href = repo.html_url
//         repo.target = "_blank"
//         repo.innerText = repo.name

//         reposEL.appendChild(repoEl)
//     })

// }
//add listener 
form.addEventListener('submit', (e) => {
    e.preventDefault();
    //tgt user
    const user = searchTerm.value;
    //conditional to check for user
    if(user){
        getUsers(user)
        searchTerm.value = '';
    }
})
