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
  record.sku = record.sku.replace("1021", "3345");
  record.row_created_at = null;

  //PUSH TO FINAL ARRAY
  exportJSON["RECORDS"].push(record);
}
fs.writeFileSync("updatedSQL.json", JSON.stringify(exportJSON));
