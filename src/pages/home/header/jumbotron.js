export default class Jumbotron{
    renderJumbotron(){
        const containerElement = document.createElement('div');
        const innerContainerElement = document.createElement('div');
        const titleElement = document.createElement('h1');
        const subtitleElement = document.createElement('p');
        containerElement.classList.add('jumbotron');
        containerElement.classList.add('jumbotron-fluid');
        containerElement.classList.add('bg-transparent');
        innerContainerElement.classList.add('container');
        innerContainerElement.classList.add('text-center');
        innerContainerElement.classList.add('text-white');
        titleElement.innerText = "Exquisite East African cuisine";
        subtitleElement.innerText = "Reserve a table or order your favourite dish online";
        titleElement.classList.add('display-4');
        subtitleElement.classList.add('lead');
        innerContainerElement.appendChild(titleElement);
        innerContainerElement.appendChild(subtitleElement);
        containerElement.appendChild(innerContainerElement);
        return containerElement;
    }
    render(){
        const jumboContainer = document.createElement('div');
        jumboContainer.classList.add('row');
        jumboContainer.classList.add('justify-content-around');
        jumboContainer.classList.add('align-items-center');
        jumboContainer.classList.add('h-75');
        jumboContainer.appendChild(this.renderJumbotron());
        return jumboContainer;
    }
}