import Nav from "./nav";
import Jumbotron from "./jumbotron";

export default class Header{
    render(){
        const headerContainer = document.createElement('header');
        headerContainer.classList.add('container-fluid');
        headerContainer.appendChild(new Nav().render());
        headerContainer.appendChild(new Jumbotron().render());
        return headerContainer;
    }
}