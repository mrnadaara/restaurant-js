import Logo from "./logo";
import Links from "./links";

export default class Nav {
    render(){
        const navContainer = document.createElement('div');
        navContainer.classList.add('row');
        navContainer.classList.add('justify-content-around');
        navContainer.appendChild(new Logo().render());
        navContainer.appendChild(new Links().render());
        return navContainer;
    }
}