module.exports = function(dot) {
  if (dot.projectName) {
    return
  }

  dot.any("projectName", projectName)
}

function projectName(/* prop, arg, dot, event, signal */) {}
