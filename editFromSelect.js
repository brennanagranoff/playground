"use strict";

const fs = require("fs");
const path = require("path");

var directoryJSON = "/Users/brennan/Desktop/new-upload/";

fs.readdir(directoryJSON, function (err, items) {
  //for files in above directory
  for (var i = 0; i < items.length; i++) {
    if (items[i].indexOf("export_") > -1) {
      continue;
    }
    //confirm using JSON file
    var isJSON = false;
    if (items[i].indexOf(".json") > -1) {
      isJSON = true;
    }
    if (isJSON == false) {
      continue;
    }

    var currentFile = fs.readFileSync(directoryJSON + "/" + items[i]);
    var fileJSON = JSON.parse(currentFile);

    //fileJSON['Backgrounds'][0]['Path'] = "backgrounds/so/[type]/[background].jpg";

    //fileJSON['PackageCode'] = (myMap[((items[i]).slice(0,2)).toLowerCase()]);

    //console.log(fileJSON['Faces'])

    for (var t = 0; t < fileJSON["RECORDS"].length; t++) {
      var record = fileJSON["RECORDS"][t];
      record["width"] = 2100;
      record["height"] = 3840;

      record["info_bars"] = [
        {
          X: 1050,
          Y: 0,
          Text: "HS-XL",
          FlipH: true,
          FlipV: false,
          TextX: 57,
          TextY: 3430,
          Width: 115,
          Height: 3840,
          AnchorX: 0.5,
          AnchorY: 0,
          TextSize: 36,
          Background: "#ffffff",
          TextAnchorX: 0.5,
          TextAnchorY: 0,
        },
      ];
      record["info_blocks"] = [{ X: 0, Y: 3840, FlipH: true, FlipV: false, Width: 1050, AnchorX: 0, AnchorY: 0 }];

      console.log(record);
    }

    //console.log(fileJSON['Faces'])

    //prepare new data for export
    let exportData = JSON.stringify(fileJSON, null, 2);

    //set export file name
    var exportFileName = "export_" + items[i];

    //set export file name

    //export file
    fs.writeFileSync(directoryJSON + "/" + exportFileName, exportData);

    if (exportFileName == items[i]) {
      console.log("updated file " + items[i]);
    } else {
      console.log("saving " + items[i] + " as " + exportFileName);
    }
  }
});

/*

  fileJSON['Size'] = 'XL';
  fileJSON['CanvasWidth'] = 2600;
  fileJSON['CanvasHeight'] = 3660;
  fileJSON['Backgrounds'][0]['BoxHeight'] = 3660;
  fileJSON['Backgrounds'][0]['ResizeWidth'] = 2600;
  fileJSON['Backgrounds'][0]['BoxWidth'] = 2600;
  fileJSON['InfoBars'][0]['Height'] = 3660;
  fileJSON['InfoBars'][0]['X'] = fileJSON['CanvasWidth']/2;
  fileJSON['InfoBlocks'][0]['Y'] = 3660;
  fileJSON['InfoBars'][0]['Text'] = "HS-XL";
  fileJSON['InfoBars'][0]['TextY'] = fileJSON['CanvasHeight']-300;

  let exportData = JSON.stringify(fileJSON, null, 2);

  //set export file name
  var exportFileName = (items[i]).replace("L","XL")

  //export file
  fs.writeFileSync(directoryJSON+"/"+exportFileName, exportData);

  //log to console
  console.log('saving ' + items[i] + ' as ' + exportFileName)

  //console.log(fileJSON);


}})


*/

/*
fileJSON['CanvasWidth'] = 1890
    fileJSON['CanvasHeight'] = 840
    fileJSON['Backgrounds'][0]['ResizeWidth'] = 1890;
    fileJSON['Backgrounds'][0]['ResizeHeight'] = 0;
    fileJSON['Backgrounds'][0]['BoxWidth'] = 1890;
    fileJSON['Backgrounds'][0]['BoxHeight'] = 960;
    fileJSON['Backgrounds'][0]['BoxY'] = 420;
    fileJSON['Backgrounds'][0]['BoxX'] = 945;
    fileJSON['InfoBlocks'][0]['Y'] = 840;*/

//fileJSON['FacePlacements'] = facePlacements;

//log to console
//console.log("created " + facePlacements.length + " face placement objects")

/*

    //console.log(items)

      //for files in above directory
      for (var i=0; i<items.length; i++) {

      //confirm using JSON file
      var isJSON = false;
      if(items[i].indexOf('json') > -1){isJSON = true}
      if(isJSON == false){continue}

      //set base templates + iteration file
      var filePath = directoryJSON + items[i];

      //set vars to inject
      //for(var e=0;e<cleanedCSVFinal.length;e++){
      //  var designNumber = (cleanedCSVFinal[e][1])


      //open file in loop
      var currentFile = fs.readFileSync(filePath);
      let fileJSON = JSON.parse(currentFile);


      fileJSON["FaceCount"] = "";
      fileJSON["Size"] = "";
      fileJSON["FacePlacements"] = [];

/*
      //loop through currentJSON
      for(var s=0;s < fileJSON["Backgrounds"].length;s++){
        //make replacements
        fileJSON["Backgrounds"][s].Path = (fileJSON["Backgrounds"][s].Path).replace("1036", '999')
      }



      //prepare new data for export
      let exportData = JSON.stringify(fileJSON, null, 2);

      //set export file name
      var exportFileName = (items[i]).replace("NAME","NAME")

      //export file
      fs.writeFileSync("../render_templates/two_side_sock/"+exportFileName, exportData);

      //log to console
      console.log('saving ' + items[i] + ' as ' + exportFileName)

    //}
  }*/
