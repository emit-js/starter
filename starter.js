import { basename, join } from "path"

module.exports = function(dot) {
  if (dot.starter) {
    return
  }

  dot("dependencies", "starter", {
    arg: ["@dot-event/glob", "@dot-event/store"],
  })

  dot("args", "starter", {
    paths: {
      alias: ["_", "p", "path"],
      default: [],
    },
  })

  require("./starterAsk")(dot)
  require("./starterMerge")(dot)

  dot.any("starter", starter)
}

async function starter(prop, arg, dot) {
  const { starters } = arg
  const templatesPath = join(__dirname, "../templates")

  await dot.glob(prop, {
    pattern: templatesPath + "/*",
    save: true,
  })

  const paths = await dot.glob(prop, {
    absolute: true,
    pattern: arg.paths,
  })

  return Promise.all(
    paths.map(
      async path =>
        await dot.starterMerge(prop, {
          dirPath: path,
          name: basename(path),
          starters:
            starters || (await dot.starterAsk(prop)),
        })
    )
  )
}
