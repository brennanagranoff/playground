'use strict'

const fs = require('fs');
const path = require('path');

var directoryJSON = "/Users/brennan/Downloads/render-tool-update/render_templates/customized";

fs.readdir(directoryJSON, function(err, items) {

  //for files in above directory
  for (var i=0; i<items.length; i++) {


  //confirm using JSON file
  var isJSON = false;
  if(items[i].indexOf('FA-TI-1000-NA-BG-3.json') > -1){isJSON = true}
  if(isJSON == false){continue}

  var currentFile = fs.readFileSync(directoryJSON + '/' + items[i])

  var fileJSON = JSON.parse(currentFile);


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

    //import CSV with Data
    var csvImport = fs.readFileSync('faceData.csv','utf8')
    var csvArray = csvImport.split(/\r?\n/);
    var cleanedCSVFinal = [];
    for(var f=1;f<csvArray.length;f++){
      cleanedCSVFinal.push((csvArray[f]).split(','))
    }

    var facePlacements = [];

    for(var e=0;e<cleanedCSVFinal.length-1;e++){
        var imageNumber = parseInt((cleanedCSVFinal[e][0]))
        var xCoordinate = parseInt((cleanedCSVFinal[e][1]))
        var yCoordinate = parseInt((cleanedCSVFinal[e][2]))
        var aCoordinate = parseFloat((cleanedCSVFinal[e][3]))

        //console.log(imageNumber)
        /*
    if(imageNumber == 1 || imageNumber == 2){
       var randomID = "IMG2"
        if(e % 2 == 0){
          randomID = "IMG3"
        }
}    */




        var objectToInsert = {
          "ID": "IMG"+imageNumber,
          "X": xCoordinate,
          "Y": yCoordinate,
          "AnchorX": 0.5,
          "AnchorY": 0.5,
          "Rotate": true,
          "RotateAngle": aCoordinate,
          "RotateX": xCoordinate,
          "RotateY": yCoordinate
        };

        facePlacements.push(objectToInsert);

    }

    var currentFile = fs.readFileSync(directoryJSON + '/' + items[i])
    var fileJSON = JSON.parse(currentFile);

    fileJSON['FacePlacements'] = facePlacements.reverse();

    //prepare new data for export
    let exportData = JSON.stringify(fileJSON['FacePlacements']);

    //set export file name
    var exportFileName = (items[i]);

    //set export file name

    //export file
    fs.writeFileSync(directoryJSON + '/exportFaces.json', exportData);

    //console.log("updating file " + items[i])



    //log to console
    console.log("created " + facePlacements.length + " face placement objects in exportfaces.csv")
    //console.log('saving ' + items[i] + ' as ' + exportFileName)


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
}})
