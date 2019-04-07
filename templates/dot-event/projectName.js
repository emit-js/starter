module.exports = function(emit) {
  if (emit.projectName) {
    return
  }

  emit.any("projectName", projectName)
}

function projectName(/* arg, prop, emit, signal */) {}
