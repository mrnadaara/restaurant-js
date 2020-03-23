export default class Links {
    constructor(){
        this.navList = [
            'Menu',
            'Location',
            'About'
        ];
    }
    renderButton(){
        const button = document.createElement('button');
        const span = document.createElement('span');
        button.classList.add('navbar-toggler');
        button.setAttribute('type', 'button');
        button.setAttribute('data-toggle', 'collapse');
        button.setAttribute('data-target', '#navbarNav');
        button.setAttribute('aria-controls', 'navbarNav');
        button.setAttribute('aria-expanded', 'false');
        button.setAttribute('aria-label', 'Toggle navigation');
        span.classList.add('navbar-toggler-icon');
        button.appendChild(span);
        return button;
    }
    renderNavItem(navItem){
        const navItemElement = document.createElement('li');
        const navAnchorElement = document.createElement('a');
        navItemElement.classList.add('nav-item');
        navAnchorElement.classList.add('nav-link');
        navAnchorElement.setAttribute('href', '#');
        navAnchorElement.innerText = navItem;
        navItemElement.appendChild(navAnchorElement);
        return navItemElement;
    }
    renderNavList(){
        const navListContainer = document.createElement('div');
        const navListElement = document.createElement('ul');
        navListContainer.classList.add('collapse');
        navListContainer.classList.add('navbar-collapse');
        navListContainer.setAttribute('id', 'navbarNav');
        navListElement.classList.add('navbar-nav');
        navListElement.classList.add('d-flex');
        navListElement.classList.add('justify-content-between');
        navListElement.classList.add('w-100');
        this.navList.forEach((navItem) => {
            navListElement.appendChild(this.renderNavItem(navItem));
        });
        navListContainer.appendChild(navListElement);
        return navListContainer;
    }
    renderNavElement(){
        const navElement = document.createElement('nav');
        navElement.classList.add('navbar');
        navElement.classList.add('navbar-expand-lg');
        navElement.classList.add('navbar-dark');
        navElement.appendChild(this.renderButton());
        navElement.appendChild(this.renderNavList());
        return navElement;
    }
    render(){
        const logoContainer = document.createElement('div');
        logoContainer.classList.add('col-3');
        logoContainer.appendChild(this.renderNavElement());
        return logoContainer;
    }
}