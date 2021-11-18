import { Selector, t } from "testcafe";
export class LonePage {
  saveButton = Selector("#save-selection");

  addButtonSubSelector = Selector(".option-add");

  async clickOnSaveButton() {
    return await t.click(this.saveButton);
  }

  async clickOnAddButton(index: number) {
    const selector = this.addButtonSubSelector.nth(index);

    return await t.click(selector);
  }
}
