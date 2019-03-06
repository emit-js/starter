import { basename, join } from "path"

module.exports = function(dot) {
  if (dot.starter) {
    return
  }

  dot("dependencies", "starter", {
    arg: ["@dot-event/glob", "@dot-event/store"],
  })

  require("./starterAsk")(dot)
  require("./starterMerge")(dot)

  dot.any("starter", starter)
}

async function starter(prop, arg, dot) {
  const { cwd, starters } = arg
  const templatesPath = join(__dirname, "../templates")

  await dot.glob(prop, {
    pattern: templatesPath + "/*",
    save: true,
  })

  const name = basename(cwd)

  await dot.starterMerge(prop, {
    dirPath: cwd,
    name,
    starters: starters || (await dot.starterAsk(prop)),
  })
}
