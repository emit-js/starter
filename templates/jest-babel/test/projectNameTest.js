/* eslint-env jest */

import projectName from "../dist"

test("export something", () => {
  expect(projectName).not.toBeUndefined()
})
