const APIURL = "https://api.github.com/users/";
const main = document.querySelector("#main");
const searchBox = document.querySelector("#search");

const getUser = async(username)=>{
    
    const response = await fetch(APIURL+username);
    const data = await response.json();

    const avatar = data.avatar_url;
    const name = data.name;
    const bio = data.bio;
    const followers = data.followers;
    const following = data.following;
    const public_repos = data.public_repos;


    if(avatar==undefined && name==undefined && bio==undefined && followers==undefined && following==undefined && public_repos==undefined){
        const card = `
            <div class="card">
                <div>
                    <img class="avatar" alt="not found">
                </div>
                <div class="user-info">
                    <h2>UserName Is not valid.</h2>
                    <p>please enter correct username.</p>
                </div>
            </div>
        `;
        main.innerHTML = card;
    }

    else {
        const card = `
            <div class="card">
                <div>
                    <img class="avatar" src="${avatar}" alt="Florin Pop">
                </div>
                <div class="user-info">
                    <h2>${name}</h2>
                    <p>${bio}</p>

                    <ul class="info">
                        <li>${followers}<strong>Followers</strong></li>
                        <li>${following}<strong>Following</strong></li>
                        <li>${public_repos}<strong>Repos</strong></li>
                    </ul>

                    <div id="repos">
                    
                    </div>
                </div>
            </div>
        `;
        
        main.innerHTML = card;
        getRepos(username);
    }
}

const getRepos = async (username)=>{
    const repos = document.querySelector("#repos");
    const response = await fetch(APIURL+username+"/repos");
    const data = await response.json();

    data.forEach(
        (item)=>{
            const elem = document.createElement("a");
            elem.classList.add("repo");
            elem.href = item.html_url;
            elem.innerText = item.name;
            elem.target = "_blank";
            repos.appendChild(elem);
        }
    );

}

getUser("m-git-acc");

function formSubmit(inp){
    const value = searchBox.value;
    if(value!='' && value!=null && value!="null"){
        getUser(value);

        if(inp!="mohit123CheckingBroGitHubLittleCondition"){
            searchBox.value = "";
        }
    }
    return false;
}

searchBox.addEventListener(
    "keyup",
    function(){
        formSubmit("mohit123CheckingBroGitHubLittleCondition");
    }
);




