export default class Main{
    render(){
        const mainContainer = document.createElement('main');
        mainContainer.classList.add('container-fluid');
        mainContainer.setAttribute('id','main');
        return mainContainer;
    }
}