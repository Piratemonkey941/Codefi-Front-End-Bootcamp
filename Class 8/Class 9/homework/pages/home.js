export default class Home {

    constructor(){
        //when home instance is created call render
        this.render();
    }

    // when init render elements onto page

    render() {
        let appElement = document.getElementById("app");

        appElement.insertAdjacentHTML(
            "beforeend", ` 
            <h1 class='text-center'> Social Media Page</h1>
        `
        );

    }
}