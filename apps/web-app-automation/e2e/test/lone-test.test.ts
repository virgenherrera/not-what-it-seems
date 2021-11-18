import { LonePage } from "../page/lone.page";

let lonePage: LonePage = null;

fixture("e2e:Lone Page Suite")
  .page("http://localhost:3000/")
  .beforeEach(async (t) => {
    lonePage = new LonePage();

    return t;
  });

test("should do all the magic", async (t) => {
  const addButtonsCount = await lonePage.addButtonSubSelector.count;

  for (let index = 0; index < addButtonsCount; index++) {
    await lonePage.clickOnAddButton(index);
  }

  await lonePage.clickOnSaveButton();
});
