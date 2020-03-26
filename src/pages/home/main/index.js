import { DOMHelper } from '../../../Helpers';

export default class Main {
  render() {
    const mainContainer = DOMHelper.createElement(
      'main',
      ['container-fluid'],
      [{ prop: 'id', value: 'main' }],
    );
    return mainContainer;
  }
}
