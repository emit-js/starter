import { basename, join } from "path"

module.exports = function(emit) {
  if (emit.starter) {
    return
  }

  emit("dependencies", "starter", [
    "@emit-js/glob",
    "@emit-js/store",
  ])

  emit("args", "starter", {
    paths: {
      alias: ["_", "p", "path"],
      default: [],
    },
  })

  require("./starterAsk")(emit)
  require("./starterMerge")(emit)

  emit.any("starter", starter)
}

async function starter(arg, prop, emit) {
  const { starters } = arg
  const templatesPath = join(__dirname, "../templates")

  await emit.glob(prop, {
    pattern: templatesPath + "/*",
    save: true,
  })

  const paths = await emit.glob(prop, {
    absolute: true,
    pattern: arg.paths,
  })

  return Promise.all(
    paths.map(
      async path =>
        await emit.starterMerge(prop, {
          dirPath: path,
          name: basename(path),
          starters:
            starters || (await emit.starterAsk(prop)),
        })
    )
  )
}
