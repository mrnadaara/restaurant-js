import Logo from "./logo";
import Links from "./links";
import {DOMHelper} from "../../../../Helpers";

export default class Nav {
    render(){
        const navContainer = DOMHelper.createElement(
            'div',
            ['row', 'justify-content-around']
        );
        navContainer.appendChild(new Logo().render());
        navContainer.appendChild(new Links().render());
        return navContainer;
    }
}