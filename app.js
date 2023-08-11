import Github from "./github.js";
import UI from "./ui.js";

const github = new Github();
const ui = new UI();

const searchUser = document.getElementById("search-user");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", getInput);
searchUser.addEventListener("keypress", (e) => {
    if(e.code == "Enter") {
        getInput();
    }
})

function getInput() {
  if (searchUser.value !== "") {
    github
      .getUser(searchUser.value)
      .then((data) => {
        if(data.profile.message === "Not Found") {
            ui.showAlert("User not found.", "alert alert-danger");
        } else {
            ui.showProfile(data.profile);
            ui.showRepos(data.repos);
        }
      });
  } else {
    ui.showAlert("Form field not be empty.", "alert alert-info");
    ui.clearProfile();
  }

  searchUser.value = "";
}

const themeBtn = document.getElementById('theme');

themeBtn.addEventListener("click", changeTheme)

function changeTheme() {
    const body = document.querySelector("body");
    body.classList.toggle('bg-dark');
    body.classList.toggle('text-bg-dark');

    if(body.classList.contains("bg-dark")) {
        themeBtn.innerText = 'Light Mode';
    } else {
        themeBtn.innerText = 'Dark Mode';
    }
}
