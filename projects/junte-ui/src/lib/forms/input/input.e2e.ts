import { browser } from 'protractor';
import { InputPage } from './input.po';

describe('Input', () => {

  const inputPage: InputPage = new InputPage();

  beforeEach(() => {
    browser.get('/general/home');
  });

  it('check input', () => {
    inputPage.input();
  });
});
