import Menu from "./menu";
import Contact from "./contact";

class Tabs{
    constructor(tabsList){
        this.tabsList = tabsList;
    }
    renderTabHeader(tabItem, index){
        const tabContainer = document.createElement('div');
        const innerContainer = document.createElement('div');
        const anchorElement = document.createElement('a');
        const headerElement = document.createElement('h1');
        tabContainer.classList.add('col-2');
        tabContainer.classList.add('p-0');
        innerContainer.classList.add('border-right');
        innerContainer.classList.add('bg-light');
        anchorElement.setAttribute('href', '#');
        anchorElement.classList.add('text-dark');
        anchorElement.classList.add('text-decoration-none');
        headerElement.classList.add('p-3');
        headerElement.classList.add('tab-header');
        headerElement.classList.add('display-4');
        headerElement.innerText = tabItem;
        if(index === 0) {
            headerElement.classList.add('bg-primary');
            headerElement.classList.add('text-white');
        }
        headerElement.setAttribute('id', index.toString());
        anchorElement.appendChild(headerElement);
        innerContainer.appendChild(anchorElement);
        tabContainer.appendChild(innerContainer);
        return tabContainer;
    }
    changeActiveTab(prev, next){
        const prevElement = document.getElementById(prev);
        const nextElement = document.getElementById(next);
        nextElement.classList.add('bg-primary');
        nextElement.classList.add('text-white');
        prevElement.classList.remove('bg-primary');
        prevElement.classList.remove('text-white');
    }
    render(){
        const tabHeaderContainer = document.createElement('div');
        tabHeaderContainer.classList.add('row');
        tabHeaderContainer.classList.add('justify-content-start');
        tabHeaderContainer.classList.add('border-bottom');
        this.tabsList.forEach((tabItem, index) => {
            const tabElement = this.renderTabHeader(tabItem.name, index);
            tabHeaderContainer.appendChild(tabElement);
        });
        return tabHeaderContainer;
    }
}

export {
    Menu,
    Contact,
    Tabs
}