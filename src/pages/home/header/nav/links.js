import {DOMHelper} from "../../../../Helpers";

export default class Links {
    constructor(){
        this.navList = [
            'Home',
            'Location',
            'About'
        ];
    }
    renderButton(){
        const button = DOMHelper.createElement(
            'button',
            ['navbar-toggler'],
            [
                {prop: 'type', value: 'button'},
                {prop: 'data-toggle', value: 'collapse'},
                {prop: 'data-target', value: '#navbarNav'},
                {prop: 'aria-controls', value: 'navbarNav'},
                {prop: 'aria-expanded', value: 'false'},
                {prop: 'aria-label', value: 'Toggle navigation'},
            ]
        );
        const span = DOMHelper.createElement(
            'span',
            ['navbar-toggler-icon']
        );
        button.appendChild(span);
        return button;
    }
    renderNavItem(navItem){
        const navItemElement = DOMHelper.createElement(
            'li',
            ['nav-item']
        );
        const navAnchorElement = DOMHelper.createElement(
            'a',
            ['nav-link'],
            [
                {prop: 'href', value: '#'}
            ]
        );
        navAnchorElement.innerText = navItem;
        navItemElement.appendChild(navAnchorElement);
        return navItemElement;
    }
    renderNavList(){
        const navListContainer = DOMHelper.createElement(
            'div',
            ['collapse', 'navbar-collapse'],
            [
                {prop: 'id', value: 'navbarNav'}
            ]
        );
        const navListElement = DOMHelper.createElement(
            'ul',
            ['navbar-nav', 'd-flex', 'justify-content-between', 'w-100']
        );
        this.navList.forEach((navItem) => {
            navListElement.appendChild(this.renderNavItem(navItem));
        });
        navListContainer.appendChild(navListElement);
        return navListContainer;
    }
    renderNavElement(){
        const navElement = DOMHelper.createElement(
            'nav',
            ['navbar', 'navbar-expand-lg', 'navbar-dark']
        );
        navElement.appendChild(this.renderButton());
        navElement.appendChild(this.renderNavList());
        return navElement;
    }
    render(){
        const linkContainer = DOMHelper.createElement(
            'div',
            ['col-3']
        );
        linkContainer.appendChild(this.renderNavElement());
        return linkContainer;
    }
}