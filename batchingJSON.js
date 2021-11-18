const fs = require("fs");

var x = [50, 1100, 2150, 3200, 4250, 5300, 6350, 7400];
var y = [50, 640, 1230];
var exportArray = [];

var modifyObject = { placements: [{ Rotate: 0, AnchorX: 0, AnchorY: 0, X: 0, Y: 0 }] };

for (var i = 0; i < x.length; i++) {
  for (var u = 0; u < y.length; u++) {
    exportArray.push({ placements: [{ Rotate: 0, AnchorX: 0, AnchorY: 0, X: x[i], Y: y[u] }] });
  }
}

fs.writeFileSync("batchedFacesPrint.json", JSON.stringify(exportArray));
