import Nav from "./nav";

export default class Header{
    render(){
        const headerContainer = document.createElement('header');
        headerContainer.classList.add('container-fluid');
        headerContainer.appendChild(new Nav().render());
        return headerContainer;
    }
}