/* eslint-env jest */

import starter from "../"

// Variables
let emit

// Tests
beforeEach(async () => {
  emit = require("@emit-js/emit")()
  require("@emit-js/args")(emit)
  require("@emit-js/log")(emit)
  require("@emit-js/glob")(emit)
  require("@emit-js/store")(emit)
  starter(emit)
})

test("starts a new project", async () => {
  await emit.starter({
    path: __dirname + "/fixture",
    starters: ["basics"],
  })
})
