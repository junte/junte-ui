import { by, element } from 'protractor';

const MENU_FORMS_LOCATOR = by.css('jnt-link[title="Forms"]');
const MENU_INPUT_LOCATOR = by.css('jnt-link[title="Input"]');
const INPUT_LOCATOR = by.css('input[formcontrolname="input"]');
const TEXT = 'lorem ipsum dolor sit amet';



export class InputPage {

  input() {
    element(MENU_FORMS_LOCATOR).click();
    element(MENU_INPUT_LOCATOR).click();
    element(INPUT_LOCATOR).sendKeys(TEXT);
  }

}
