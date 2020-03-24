import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.css';
import Header from './pages/home/header';
import Main from "./pages/home/main";
import {Tabs, Menu, Contact} from "./pages/home/main/tabs";

document.getElementById('content').appendChild(new Header().render());
document.getElementById('content').appendChild(new Main().render());

class SwitchTabs{
    constructor(){
        this.tabsList = [
            {
                name: 'Menu',
                content: new Menu().render()
            },
            {
                name: 'Contact',
                content: new Contact().render()
            }
        ];
        this.prevIndex = 0;
        this.currentIndex = 0;
        this.tabsHeader = new Tabs(this.tabsList);
    }

    switchTabs(index){
        if(this.currentIndex !== index){
            this.prevIndex = this.currentIndex;
            this.currentIndex = index;
        }
        this.tabsHeader.changeActiveTab(this.prevIndex.toString(), this.currentIndex.toString());
        document.getElementById('main').removeChild(document.getElementById('main').lastChild);     
        document.getElementById('main').appendChild(this.renderContent());
    }

    renderTabs(){
        return this.tabsHeader.render();
    }

    renderContent(){
        return this.tabsList[this.currentIndex].content;
    }
}

const tabs = new SwitchTabs();

document.getElementById('main').appendChild(tabs.renderTabs());
document.getElementById('main').appendChild(tabs.renderContent());

for(let i = 0; i < tabs.tabsList.length; i++){
    const tabElement = document.getElementById(i.toString());
    tabElement.addEventListener('click', {
        handleEvent: (event) => {
          tabs.switchTabs(i);
        }
    });
}