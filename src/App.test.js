import { Selector } from "testcafe";

fixture("App").page("http://localhost:3000/");

test("Focus on dialog", async (t) => {
  await t
    .pressKey("tab enter")
    .expect(Selector('[data-testid="dialog"]').visible)
    .eql(true)
    .pressKey("tab");
});
