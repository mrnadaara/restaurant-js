export default class Menu{
    constructor() {
        this.menuList = [
            {name: 'Rice with beef stew', price: '$2'},
            {name: 'Rice with lamb stew', price: '$3'},
            {name: 'Mango drink', price: '$1'}
        ];
    }
    renderMenuInfo(menu){
        const container = document.createElement('div');
        const menuTextElement = document.createElement('p');
        container.classList.add('col-6');
        menuTextElement.classList.add('lead');
        menuTextElement.innerHTML = menu;
        container.appendChild(menuTextElement);
        return container;
    }
    renderMenuContainer(menuItem){
        const container = document.createElement('div');
        container.classList.add('row');
        container.classList.add('text-center');
        for(const prop in menuItem){
            container.appendChild(this.renderMenuInfo(menuItem[prop]));
        }
        return container;
    }
    renderHeader(){
        const container = document.createElement('div');
        const headerElement = document.createElement('h1');
        container.classList.add('row');
        container.classList.add('justify-content-center');
        container.classList.add('p-4');
        headerElement.classList.add('text-dark');
        headerElement.classList.add('display-4');
        headerElement.innerText = "Check out the menu below:";
        container.appendChild(headerElement);
        return container;
    }
    render(){
        const container = document.createElement('div');
        const innerContainer = document.createElement('div');
        container.classList.add('row');
        container.classList.add('justify-content-center');
        innerContainer.classList.add('container');
        innerContainer.appendChild(this.renderHeader());
        this.menuList.forEach((menuItem) => {
            innerContainer.appendChild(this.renderMenuContainer(menuItem));
        });
        container.classList.add('pb-6');
        container.appendChild(innerContainer);
        return container;
    }
}