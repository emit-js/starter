/* eslint-env jest */

import { projectName } from "../"

test("projectName", (): void => {
  expect(projectName).not.toBeUndefined()
})
