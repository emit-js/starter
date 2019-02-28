/* eslint-env jest */

import starter from "./"

// Variables
let dot

// Tests
beforeEach(async () => {
  dot = require("dot-event")()
  require("@dot-event/log")(dot)
  require("@dot-event/glob")(dot)
  require("@dot-event/store")(dot)
  starter(dot)
})

test("starts a new project", async () => {
  await dot.starter({
    cwd: __dirname + "/fixture",
    starters: ["basics"],
  })
})
