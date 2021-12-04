"use strict";

const fs = require("fs");
const path = require("path");
const { Parser } = require("json2csv");

//Import JSON
var batchData = fs.readFileSync("batchData.json");
batchData = JSON.parse(batchData);
batchData = batchData["RECORDS"];

var openOrders = fs.readFileSync("openOrders.json");
openOrders = JSON.parse(openOrders);
openOrders = openOrders["RECORDS"];

var returnObject = [];

//for each file
for (var i = 0; i < batchData.length; i++) {
  var file = batchData[i].file_name;
  var batch = batchData[i].output_file_key;
  //loop through orders to find matching order number
  for (var s = 0; s < openOrders.length; s++) {
    var orderNumber = openOrders[s].number;
    var id = openOrders[s].id;
    var orderDate = openOrders[s].order_date;
    if (file.indexOf(orderNumber) > -1) {
      returnObject.push({
        orderNumber: orderNumber,
        id: id,
        batchName: batch,
        file: file,
        orderDate: orderDate,
      });
      continue;
    }
  }
}

//Convert to CSV
const json2csvParser1 = new Parser();
const orderMatches = json2csvParser1.parse(returnObject);

//Write CSV File
fs.writeFile("openOrderBatches.csv", orderMatches, "utf8", function () {
  console.log("exported csv success");
});
