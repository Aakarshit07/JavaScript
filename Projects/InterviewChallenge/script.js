let searchInput = document.querySelector("#search");
let mainBox = document.querySelector("#main");


class User {
  constructor(name, bio, avatar_url, followers, following, public_repos, twitter_username, location) {
    this.name = name, 
    this.bio = bio, 
    this.avatar_url = avatar_url, 
    this.followers = followers, 
    this.following = following, 
    this.public_repos = public_repos, 
    this.twitter_username = twitter_username, 
    this.location = location
  }
  async getUserDetails(userName) {
    let response = await fetch(`https://api.github.com/users/${userName}`);
    let data = await response.json();
    console.log(data);
    this.createUserCard(data); 
  }
  createUserCard({name, bio, avatar_url, followers, following, public_repos, twitter_username, location}) {
    let cardContainer = document.getElementById("card-container")
    let contentCard = ` 
    <div class="rounded-circle w-25">
    <img src=${avatar_url} class="card-img-top rounded-circle border border-info">
    </div>
    <div class="card-body">
      <div class="ml-3 mb-2 p-2"> 
        <h5 class="card-title">${name}</h5>
      </div> 
      <div class="ml-3 mb-2 p-2"> 
        <p class="card-text">${bio}</p>
      </div>
      <div class="ml-3 p-2">
        <section class="mb-2">  
        <p class="card-text d-inline "> Followers: ${followers}</p>
        <p class="card-text d-inline ml-2 p-2"> Following: ${following}</p>
        <p class="card-text d-inline ml-2 p-2"> Repos: ${public_repos}</p>
        </section>
        <p class="card-text mb-2 d-inline"> Twitter: ${twitter_username}</p>
        <p class="card-text d-inline ml-2 p-2"> Location: ${location}</p>
  
      </div>
    </div>`;
    cardContainer.innerHTML = contentCard;
    mainBox.appendChild(cardContainer);
  }
}

searchInput.addEventListener("input", (event) => {
  event.preventDefault();
  let userName = event.target.value;
  let user = new User.getUserDetails(userName);
});
