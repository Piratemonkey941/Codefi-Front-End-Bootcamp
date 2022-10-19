import Home from "../pages/home.js";
import Settings from "../pages/settings.js";
import { userService } from "../user/user.service.js";
export default class Navbar {
 

  constructor() {
    this.render();
    this.addEventListeners();

    this.changeUsername(userService.user.username);
    userService.userObsv.subscribe((data) => {
      this.changeUsername(data);
    })
  }


  render() {
    let appElem = document.getElementById("app");
    appElem.insertAdjacentHTML(
    "beforeend",
      `
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" >Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">

            <ul class="navbar-nav">

              <li class="nav-item">
                <a class="nav-link active" aria-current="page" id="home" style='cursor:pointer'>Home</a>
              </li>
              <li class="nav-item" id='settings' style='cursor:pointer'>
                <div id="user" ></div>
              </li>
              <li class="nav-item">
                <a class="nav-link" >Pricing</a>
              </li>
              <li class="nav-item" id='settings' style='cursor:pointer'>
                <a class="nav-link settings" >Settings</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
      `
    )
  
  }
  
  addEventListeners() {

    let homeElem = document.getElementById("home");
    let settingsElem = document.getElementById("settings");
    let appElem = document.getElementById("app");

    //attatch event listeners
    homeElem.addEventListener("click", () => {

      //cleare app elements 
      appElem.addEventListener = '';
      // reinit navbar and home
      new Navbar();
      new Home();
    });
      
    settingsElem.addEventListener('click', () => {
      //cleare app elements 
      appElem.innerHTML= '';
      // reinit navbar and home
      new Navbar();
      new Settings();
    });
  }

  changeUsername(username){
    let userElem = document.getElementById('user');
    userElem.innerText = `Welcome ${username}`
  }
}
