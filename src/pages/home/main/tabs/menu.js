import {DOMHelper} from "../../../../Helpers";
export default class Menu{
    constructor() {
        this.menuList = [
            {name: 'Rice with beef stew', price: '$2'},
            {name: 'Rice with lamb stew', price: '$3'},
            {name: 'Mango drink', price: '$1'}
        ];
    }
    renderMenuInfo(menu){
        const container = DOMHelper.createElement(
            'div',
            ['col-6']
        );
        const menuTextElement = DOMHelper.createElement(
            'p',
            ['lead']
        );
        menuTextElement.innerHTML = menu;
        container.appendChild(menuTextElement);
        return container;
    }
    renderMenuContainer(menuItem){
        const container = DOMHelper.createElement(
            'div',
            ['row', 'text-center']
        );
        for(const prop in menuItem){
            container.appendChild(this.renderMenuInfo(menuItem[prop]));
        }
        return container;
    }
    renderHeader(){
        const container = DOMHelper.createElement(
            'div',
            ['row', 'justify-content-center', 'p-4']
        );
        const headerElement = DOMHelper.createElement(
            'h1',
            ['text-dark', 'display-4']
        );
        headerElement.innerText = "Check out the menu below:";
        container.appendChild(headerElement);
        return container;
    }
    render(){
        const container = DOMHelper.createElement(
            'div',
            ['row', 'justify-content-center', 'pb-6']
        );
        const innerContainer = DOMHelper.createElement(
            'div',
            ['container']
        );
        innerContainer.appendChild(this.renderHeader());
        this.menuList.forEach((menuItem) => {
            innerContainer.appendChild(this.renderMenuContainer(menuItem));
        });
        container.appendChild(innerContainer);
        return container;
    }
}