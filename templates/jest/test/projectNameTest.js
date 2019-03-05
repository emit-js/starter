/* eslint-env jest */

var projectName = require("../dist")

test("projectName", function() {
  expect(projectName).not.toBeUndefined()
})
