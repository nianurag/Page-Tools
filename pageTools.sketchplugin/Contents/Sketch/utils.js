// Utility Methods

var debug = function(arg) {
  log("😕 Sketch Plugin DEBUG --> " + arg)
}

var error = function(arg) {
  log("❌ Sketch Plugin ERROR --> " + arg)
}

function sketchToast(doc, arg) {
  doc.showMessage(arg)
}