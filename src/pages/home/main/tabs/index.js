import Menu from "./menu";
import Contact from "./contact";
import {DOMHelper} from "../../../../Helpers";

class Tabs{
    constructor(tabsList){
        this.tabsList = tabsList;
    }
    renderTabHeader(tabItem, index){
        const tabContainer = DOMHelper.createElement(
            'div',
            ['col-2', 'p-0']
        );
        const innerContainer = DOMHelper.createElement(
            'div',
            ['border-right', 'bg-light']
        );
        const anchorElement = DOMHelper.createElement(
            'a',
            ['text-dark', 'text-decoration-none'],
            [
                {prop: 'href', value: '#'}
            ]
        );
        const headerElement = DOMHelper.createElement(
            'h1',
            ['p-3', 'tab-header', 'display-4'],
            [
                {prop: 'id', value: index.toString()}
            ]
        );
        headerElement.innerText = tabItem;
        if(index === 0) {
            headerElement.classList.add('bg-primary');
            headerElement.classList.add('text-white');
        }
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
        const tabHeaderContainer = DOMHelper.createElement(
            'div',
            ['row', 'justify-content-start', 'border-bottom']
        );
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