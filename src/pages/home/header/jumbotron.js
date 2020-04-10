import { DOMHelper } from '../../../Helpers';

export default class Jumbotron {
  renderJumbotron() {
    const containerElement = DOMHelper.createElement('div', [
      'jumbotron',
      'jumbotron-fluid',
      'bg-transparent',
    ]);
    const innerContainerElement = DOMHelper.createElement('div', [
      'container',
      'text-center',
      'text-white',
    ]);
    const titleElement = DOMHelper.createElement('h1', ['display-4']);
    const subtitleElement = DOMHelper.createElement('p', ['lead']);
    titleElement.innerText = 'Exquisite East African cuisine';
    subtitleElement.innerText = 'Reserve a table or order your favourite dish online';
    innerContainerElement.appendChild(titleElement);
    innerContainerElement.appendChild(subtitleElement);
    containerElement.appendChild(innerContainerElement);
    return containerElement;
  }

  render() {
    const jumboContainer = DOMHelper.createElement('div', [
      'row',
      'justify-content-around',
      'align-items-center',
      'h-75',
    ]);
    jumboContainer.appendChild(this.renderJumbotron());
    return jumboContainer;
  }
}
