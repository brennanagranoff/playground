"use strict";

const fs = require("fs");
const path = require("path");

//Flags
var randomRotate = false;

//import CSV with Data
var csvImport = fs.readFileSync("faceData.csv", "utf8");
var csvArray = csvImport.split(/\r?\n/);
var cleanedCSVFinal = [];
for (var f = 1; f < csvArray.length; f++) {
  cleanedCSVFinal.push(csvArray[f].split(","));
}

var facePlacements = [];

for (var e = 0; e < cleanedCSVFinal.length - 1; e++) {
  var imageNumber = parseInt(cleanedCSVFinal[e][0]);
  var xCoordinate = parseInt(cleanedCSVFinal[e][1]);
  var yCoordinate = parseInt(cleanedCSVFinal[e][2]);
  var aCoordinate = parseFloat(cleanedCSVFinal[e][3]);

  var ranNum = Math.ceil(Math.random() * 6) * (Math.round(Math.random()) ? 1 : -1);

  if (randomRotate) {
    aCoordinate = roundToTwo(ranNum * aCoordinate);
  }

  var objectToInsert = {
    ID: imageNumber - 1,
    X: xCoordinate,
    Y: yCoordinate,
    AnchorX: 0.5,
    AnchorY: 0.5,
    Rotate: true,
    RotateAngle: aCoordinate,
    RotateX: xCoordinate,
    RotateY: yCoordinate,
  };

  facePlacements.push(objectToInsert);
}

var fileJSON = [];

fileJSON["FacePlacements"] = facePlacements.reverse();

//prepare new data for export
let exportData = JSON.stringify(fileJSON["FacePlacements"]);

//set export file name

//export file
fs.writeFileSync("exportFaces.json", exportData);

//console.log("updating file " + items[i])

//log to console
console.log("created " + facePlacements.length + " face placement objects in exportfaces.csv");

function roundToTwo(num) {
  return +(Math.round(num + "e+2") + "e-2");
}
