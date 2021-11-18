const fs = require("fs");
const path = require("path");

var tableExport = fs.readFileSync("export.json");
var tableData = JSON.parse(tableExport);
var records = tableData["RECORDS"];
var exportJSON = { RECORDS: [] };
for (let i = 0; i < records.length; i++) {
  const record = records[i];
  //recordParsed = JSON.parse(record);

  var objectPairs = Object.entries(records[i]);
  //loop through object pairs
  for (let s = 0; s < objectPairs.length; s++) {
    //set key
    const key = objectPairs[s][0];
    const value = objectPairs[s][1];

    //parse JSON
    if (record[key].indexOf('{"') > -1 && record[key].indexOf("}") > -1) {
      record[key] = JSON.parse(record[key]);
    }
  }

  //WRITE UPDATES
  if (record.images[1]) {
    record.images[1] = {
      ID: 1,
      Name: "Image #1",
      Path: "hoopswagg.crops",
      Type: "dynamic",
      Color: "",
      FlipH: false,
      FlipV: false,
      ImageX: 0,
      ImageY: 0,
      Resize: true,
      Source: "s3",
      AnchorX: 0,
      AnchorY: 0,
      IsColor: false,
      BoxWidth: 484,
      BoxHeight: 484,
      Extension: "png",
      ResizeAuto: true,
      ResizeWidth: 484,
      ResizeHeight: 484,
      ResizeFunction: 0,
    };
    record.image_placements = [
      { X: 0, Y: 0, ID: 0, Rotate: false, AnchorX: 0, AnchorY: 0, RotateX: 0, RotateY: 0, RotateAngle: 0 },
      { X: 1935, Y: -49, ID: 1, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 1935, RotateY: -48.5, RotateAngle: 4.555 },
      { X: 1608, Y: 411, ID: 1, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 1608, RotateY: 410.5, RotateAngle: 8.988 },
      { X: 1874, Y: 887, ID: 1, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 1874, RotateY: 886.5, RotateAngle: -2.306 },
      { X: 1860, Y: 3124, ID: 1, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 1860, RotateY: 3123.5, RotateAngle: 8.647 },
      { X: 1001, Y: 3125, ID: 1, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 1001, RotateY: 3124.5, RotateAngle: 2.018 },
      { X: 1129, Y: 819, ID: 1, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 1129, RotateY: 819, RotateAngle: 2.018 },
      { X: 1804, Y: 1999, ID: 1, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 1803.5, RotateY: 1999, RotateAngle: 9.931 },
      { X: 1452, Y: 2562, ID: 1, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 1451.5, RotateY: 2561.5, RotateAngle: -7.989 },
      { X: 982, Y: 2019, ID: 1, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 981.5, RotateY: 2019, RotateAngle: 23.419 },
      { X: 2179, Y: 1439, ID: 1, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 2179, RotateY: 1439, RotateAngle: -6.288 },
      { X: 1430, Y: 1409, ID: 1, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 1429.5, RotateY: 1409, RotateAngle: 11.19 },
      { X: 887, Y: 37, ID: 1, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 886.5, RotateY: 36.5, RotateAngle: -6.717 },
      { X: 26, Y: 1133, ID: 1, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 25.5, RotateY: 1133, RotateAngle: -0.505 },
      { X: 172, Y: 3162, ID: 1, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 171.5, RotateY: 3162, RotateAngle: -3.975 },
      { X: 486, Y: 2654, ID: 1, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 485.5, RotateY: 2653.5, RotateAngle: 16.836 },
      { X: 160, Y: 2144, ID: 1, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 159.5, RotateY: 2143.5, RotateAngle: 4.775 },
      { X: 487, Y: 1582, ID: 1, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 486.5, RotateY: 1581.5, RotateAngle: 15.501 },
      { X: 505, Y: 772, ID: 1, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 504.5, RotateY: 771.5, RotateAngle: 5.651 },
      { X: 189, Y: 192, ID: 1, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 188.5, RotateY: 191.5, RotateAngle: 9.683 },
    ];
  }
  if (record.images[2]) {
    record.images[2] = {
      ID: 2,
      Name: "Image #2",
      Path: "hoopswagg.crops",
      Type: "dynamic",
      Color: "",
      FlipH: false,
      FlipV: false,
      ImageX: 0,
      ImageY: 0,
      Resize: true,
      Source: "s3",
      AnchorX: 0,
      AnchorY: 0,
      IsColor: false,
      BoxWidth: 484,
      BoxHeight: 484,
      Extension: "png",
      ResizeAuto: true,
      ResizeWidth: 484,
      ResizeHeight: 484,
      ResizeFunction: 0,
    };
    record.image_placements = [
      { X: 0, Y: 0, ID: 0, Rotate: false, AnchorX: 0, AnchorY: 0, RotateX: 0, RotateY: 0, RotateAngle: 0 },
      { X: 1464, Y: 1066, ID: 1, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 1464, RotateY: 1066, RotateAngle: 4.556 },
      { X: -141, Y: 1155, ID: 2, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: -141, RotateY: 1155, RotateAngle: 4.556 },
      { X: 923, Y: -197, ID: 2, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 923, RotateY: -197, RotateAngle: 4.556 },
      { X: 1729, Y: 479, ID: 2, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 1729, RotateY: 479, RotateAngle: 4.556 },
      { X: -117, Y: 2329, ID: 1, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: -117, RotateY: 2329, RotateAngle: 4.556 },
      { X: 428, Y: 368, ID: 2, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 428, RotateY: 368, RotateAngle: 4.556 },
      { X: 428, Y: 2832, ID: 2, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 428, RotateY: 2832, RotateAngle: 4.556 },
      { X: 429, Y: 1654, ID: 2, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 429, RotateY: 1654, RotateAngle: 4.556 },
      { X: 1059, Y: 1736, ID: 2, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 1059, RotateY: 1736, RotateAngle: 4.556 },
      { X: 2273, Y: 1066, ID: 2, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 2273, RotateY: 1066, RotateAngle: 4.556 },
      { X: 1093, Y: 2961, ID: 2, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 1093, RotateY: 2961, RotateAngle: 4.556 },
      { X: 1508, Y: 2290, ID: 2, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 1508, RotateY: 2290, RotateAngle: 4.556 },
      { X: 1460, Y: -129, ID: 2, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 1460, RotateY: -129, RotateAngle: 4.556 },
      { X: 1705, Y: 1698, ID: 1, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 1705, RotateY: 1698, RotateAngle: 4.556 },
      { X: -196, Y: 168, ID: 1, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: -196, RotateY: 168, RotateAngle: 4.556 },
      { X: 1838, Y: 3557, ID: 1, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 1838, RotateY: 3557, RotateAngle: 4.556 },
      { X: -196, Y: 3443, ID: 1, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: -196, RotateY: 3443, RotateAngle: 4.556 },
      { X: 1705, Y: 2868, ID: 1, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 1705, RotateY: 2868, RotateAngle: 4.556 },
      { X: 582, Y: 3463, ID: 1, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 582, RotateY: 3463, RotateAngle: 4.556 },
      { X: 565, Y: 2243, ID: 1, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 565, RotateY: 2243, RotateAngle: 4.556 },
      { X: 600, Y: 1023, ID: 1, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 600, RotateY: 1023, RotateAngle: 4.556 },
    ];
  }
  if (record.images[3]) {
    record.images[3] = {
      ID: 3,
      Name: "Image #3",
      Path: "hoopswagg.crops",
      Type: "dynamic",
      Color: "",
      FlipH: false,
      FlipV: false,
      ImageX: 0,
      ImageY: 0,
      Resize: true,
      Source: "s3",
      AnchorX: 0,
      AnchorY: 0,
      IsColor: false,
      BoxWidth: 484,
      BoxHeight: 484,
      Extension: "png",
      ResizeAuto: true,
      ResizeWidth: 484,
      ResizeHeight: 484,
      ResizeFunction: 0,
    };
    record.image_placements = [
      { X: 0, Y: 0, ID: 0, Rotate: false, AnchorX: 0, AnchorY: 0, RotateX: 0, RotateY: 0, RotateAngle: 0 },
      { X: 1438, Y: 604, ID: 1, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 1438, RotateY: 604, RotateAngle: 4.556 },
      { X: 1795, Y: 971, ID: 2, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 1795, RotateY: 971, RotateAngle: 4.556 },
      { X: 1826, Y: 226, ID: 3, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 1826, RotateY: 226, RotateAngle: 4.556 },
      { X: 2059, Y: 1515, ID: 3, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 2059, RotateY: 1515, RotateAngle: 4.556 },
      { X: 1700, Y: 1951, ID: 2, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 1700, RotateY: 1951, RotateAngle: 4.556 },
      { X: 358, Y: 2350, ID: 2, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 358, RotateY: 2350, RotateAngle: 4.556 },
      { X: 358, Y: 2350, ID: 2, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 358, RotateY: 2350, RotateAngle: 4.556 },
      { X: 1104, Y: 205, ID: 2, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 1104, RotateY: 205, RotateAngle: 4.556 },
      { X: 679, Y: -47, ID: 1, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 679, RotateY: -47, RotateAngle: 4.556 },
      { X: 68, Y: 1806, ID: 1, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 68, RotateY: 1806, RotateAngle: 4.556 },
      { X: 910, Y: 804, ID: 1, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 910, RotateY: 804, RotateAngle: 4.556 },
      { X: 68, Y: 214, ID: 1, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 68, RotateY: 214, RotateAngle: 4.556 },
      { X: 714, Y: 2864, ID: 1, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 714, RotateY: 2864, RotateAngle: 4.556 },
      { X: 2013, Y: 2421, ID: 1, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 2013, RotateY: 2421, RotateAngle: 4.556 },
      { X: 1297, Y: 3254, ID: 1, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 1297, RotateY: 3254, RotateAngle: 4.556 },
      { X: 1405, Y: 1428, ID: 1, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 1405, RotateY: 1428, RotateAngle: 4.556 },
      { X: 477, Y: 490, ID: 3, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 477, RotateY: 490, RotateAngle: 4.556 },
      { X: 1443, Y: 2430, ID: 3, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 1443, RotateY: 2430, RotateAngle: 4.556 },
      { X: 145, Y: 2986, ID: 3, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 145, RotateY: 2986, RotateAngle: 4.556 },
      { X: 990, Y: 1923, ID: 3, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 990, RotateY: 1923, RotateAngle: 4.556 },
      { X: 619, Y: 1397, ID: 3, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 619, RotateY: 1397, RotateAngle: 4.556 },
      { X: 498, Y: 3484, ID: 2, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 498, RotateY: 3484, RotateAngle: 4.556 },
      { X: 1807, Y: 2944, ID: 2, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 1807, RotateY: 2944, RotateAngle: 4.556 },
      { X: 144, Y: 956, ID: 2, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 144, RotateY: 956, RotateAngle: 4.556 },
      { X: 2206, Y: 592, ID: 2, Rotate: true, AnchorX: 0.5, AnchorY: 0.5, RotateX: 2206, RotateY: 592, RotateAngle: 4.556 },
    ];
  }
  //PUSH TO FINAL ARRAY
  exportJSON["RECORDS"].push(record);
}
fs.writeFileSync("updatedSQL.json", JSON.stringify(exportJSON));
