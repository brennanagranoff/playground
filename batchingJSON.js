const fs = require("fs");

var x = [50, 2200, 4350, 6500];
var y = [50, 3755, 7460, 11165, 14870];

var exportArray = [];

var modifyObject = { placements: [{ Rotate: 0, AnchorX: 0, AnchorY: 0, X: 0, Y: 0 }] };

for (var i = 0; i < x.length; i++) {
  for (var u = 0; u < y.length; u++) {
    exportArray.push({ placements: [{ Rotate: 0, AnchorX: 0, AnchorY: 0, X: x[i], Y: y[u] }] });
  }
}

fs.writeFileSync("batchedFacesPrint.json", JSON.stringify(exportArray));
