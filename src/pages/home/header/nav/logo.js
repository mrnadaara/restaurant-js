import {DOMHelper} from "../../../../Helpers";

export default class Logo {
    renderNavAnchor(){
        const anchorElement = DOMHelper.createElement(
            'a',
            ['navbar-brand']
        );
        anchorElement.innerText = "Cagarweyne Restaurant";
        return anchorElement;
    }
    renderNavElement(){
        const navElement = DOMHelper.createElement(
            'nav',
            ['navbar', 'navbar-dark', 'bg-primary', 'd-flex', 'justify-content-center', 'rounded-lg']
        );
        navElement.appendChild(this.renderNavAnchor());
        return navElement;
    }
    render(){
        const logoContainer = DOMHelper.createElement(
            'div',
            ['col-2']
        );
        logoContainer.appendChild(this.renderNavElement());
        return logoContainer;
    }
}