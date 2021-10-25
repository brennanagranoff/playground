'use strict'

const fs = require('fs');
const path = require('path');

var directoryJSON = "/Users/brennan/Downloads/render-tool-update/backgrounds/presets/";

var designNumberImport = [];
var jpegFiles = []

fs.readdir(directoryJSON, function(err, items) {


    //import CSV with Data
    var csvImport = fs.readFileSync('import.csv','utf8')
    var csvArray = csvImport.split(/\r?\n/);
    var cleanedCSVFinal = [];
    for(var f=1;f<csvArray.length;f++){
      cleanedCSVFinal.push((csvArray[f]).split(','))
    }

    //set designNumber array

    for(var x=0;x<cleanedCSVFinal.length;x++){
      if(cleanedCSVFinal[x][5] == 'TRUE' && cleanedCSVFinal[x][2] == 'TRUE'){
      designNumberImport.push((cleanedCSVFinal[x][1]))
      }
    }

      //for files in above directory
      for (var i=0; i<items.length; i++) {
      var isJSON = false;
      if(items[i].indexOf('.jpg') > -1){isJSON = true}
      if(isJSON == false){continue}
      jpegFiles.push(items[i].replace('.jpg',''))
      }

      //ones in 1 but not 2
      var difference = designNumberImport.filter(x => jpegFiles.indexOf(x) === -1);
      console.log(difference)

      //console.log(designNumberImport.length)
      //console.log(jpegFiles.length)
})
