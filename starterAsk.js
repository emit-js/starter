// Packages
import { createPromptModule } from "inquirer"
import { basename } from "path"

// Helpers
import starterTemplates from "./starterTemplates"

module.exports = function(dot) {
  dot.any("starterAsk", starterAsk)
}

async function starterAsk(prop, arg, dot) {
  const ask = createPromptModule()
  const choices = Object.keys(starterTemplates)
  const paths = dot.get(prop, "glob")
  const templates = paths.map(path => basename(path))
  const answers = await ask([
    {
      choices,
      message: "What kind of project is this?",
      name: "projectType",
      type: "list",
    },
    {
      choices: ({ projectType }) => {
        return templates.map(template => {
          const checked = starterTemplates[
            projectType
          ].includes(template)
          return { checked, name: template }
        })
      },
      message:
        "Select starter templates (see https://git.io/fa8FQ)",
      name: "starters",
      type: "checkbox",
    },
  ])

  return answers.starters
}
