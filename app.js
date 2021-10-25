'use strict'

const fs = require('fs');
const path = require('path');

var directoryJSON = "/Users/brennan/Downloads/render-tool-update/render_templates/customized/";

fs.readdir(directoryJSON, function(err, items) {

 /*
    //import CSV with Data
    var csvImport = fs.readFileSync('import.csv','utf8')
    var csvArray = csvImport.split(/\r?\n/);
    var cleanedCSVFinal = [];
    for(var f=1;f<csvArray.length;f++){
      cleanedCSVFinal.push((csvArray[f]).split(','))
    }
    */
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


      fileJSON["DPI"] = 210;
/*
      //loop through currentJSON
      for(var s=0;s < fileJSON["Backgrounds"].length;s++){
        //make replacements
        fileJSON["Backgrounds"][s].Path = (fileJSON["Backgrounds"][s].Path).replace("1036", '999')
      }
      */


      //prepare new data for export
      let exportData = JSON.stringify(fileJSON, null, 2);

      //set export file name
      var exportFileName = (items[i]).replace("NAME","NAME")
      var exportFileName = (items[i])

      //export file
      fs.writeFileSync(directoryJSON+"/"+exportFileName, exportData);

      //log to console
      console.log('saving ' + items[i] + ' as ' + exportFileName)

    //}
  }
});
