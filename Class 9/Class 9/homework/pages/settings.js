import { userService } from "../user/user.service.js";

export default class Settings {
  constructor() {
    this.render();
    this.addEventListeners();
    this.changeUsername(userService.user.username)
  }

  render() {
    let appElement = document.getElementById("app");

    appElement.insertAdjacentHTML(
      "beforeend",
      `
        <h1 class="text-center">Settings</h1>
        

        <div class="container">
            <form>
                <div class="mb-3">
                    <label class="form-label" id="userLabel">username: </label>
                    <input type="text" class="form-control" id="userInput" >
                </div>
               
                <div class="text-center">
                    <button type="submit" class="btn btn-primary" id="settingsBtn">Submit</button>
                </div>
            </form>
        </div>
            `
    );
  }

    addEventListeners(){
        let settingsBtnElem = document.getElementById('settingsBtn');

        settingsBtnElem.addEventListener('click', (event) =>{
            event.preventDefault();
            let newUserName = document.getElementById('userInput').value
            this.changeUsername(newUserName)
            userService.next(newUserName)
        })

    }

    changeUsername (){
        let userLabelElem = document.getElementById('userLabel');

        userLabelElem.innerText = `username: ${username}`
    }

}
