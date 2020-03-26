import Nav from './nav';
import Jumbotron from './jumbotron';
import { DOMHelper } from '../../../Helpers';

export default class Header {
  render() {
    const headerContainer = DOMHelper.createElement('header', [
      'container-fluid',
    ]);
    headerContainer.appendChild(new Nav().render());
    headerContainer.appendChild(new Jumbotron().render());
    return headerContainer;
  }
}
