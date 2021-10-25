"use strict";
const ObjectsToCsv = require("objects-to-csv");
var jsonexport = require("jsonexport");

const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: "bundles.csv",
  header: [
    { id: "sku", title: "SKU" },
    { id: "metadata", title: "METADATA" },
  ],
});

const fs = require("fs");
const path = require("path");

//import CSV with Data
var csvImport = fs.readFileSync("faceData.csv", "utf8");
var csvArray = csvImport.split(/\r?\n/);
var cleanedCSVFinal = [];
for (var f = 1; f < csvArray.length; f++) {
  cleanedCSVFinal.push(csvArray[f].split(","));
}

var exportData = [];

for (var e = 0; e < cleanedCSVFinal.length - 1; e++) {
  var parentSKU = cleanedCSVFinal[e][0];
  var sku1 = cleanedCSVFinal[e][1];
  var sku1Quantity = cleanedCSVFinal[e][2];
  var sku2 = cleanedCSVFinal[e][3];
  var sku2Quantity = cleanedCSVFinal[e][4];
  var sku3 = cleanedCSVFinal[e][5];
  var sku3Quantity = cleanedCSVFinal[e][6];
  var sku4 = cleanedCSVFinal[e][7];
  var sku4Quantity = cleanedCSVFinal[e][8];
  var sku5 = cleanedCSVFinal[e][9];
  var sku5Quantity = cleanedCSVFinal[e][10];

  var bundleObject = { bundled_items: {} };

  if (sku1) {
    bundleObject.bundled_items[sku1] = parseInt(sku1Quantity);
  }
  if (sku2) {
    bundleObject.bundled_items[sku2] = parseInt(sku2Quantity);
  }
  if (sku3) {
    bundleObject.bundled_items[sku3] = parseInt(sku3Quantity);
  }
  if (sku4) {
    bundleObject.bundled_items[sku4] = parseInt(sku4Quantity);
  }
  if (sku5) {
    bundleObject.bundled_items[sku5] = parseInt(sku5Quantity);
  }
  bundleObject.bundled_items = bundleObject.bundled_items;
  var exportObject = { sku: parentSKU, metadata: JSON.stringify(bundleObject) };
  console.log(JSON.stringify(exportObject));
  exportData.push(exportObject);
}

console.log(exportData[0]);

csvWriter
  .writeRecords(exportData) // returns a promise
  .then(() => {
    console.log("...Done");
  });
