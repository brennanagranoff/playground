'use strict'

const fs = require('fs');
const path = require('path');

var directoryJSON = "/Users/brennan/Downloads/render-tool-update/render_templates/two_side_sock/";

var designNumberImport = [];

fs.readdir(directoryJSON, function(err, items) {


  //import CSV with Data
  var csvImport = fs.readFileSync('import.csv', 'utf8')
  var csvArray = csvImport.split(/\r?\n/);
  var cleanedCSVFinal = [];
  for (var f = 1; f < csvArray.length; f++) {
    cleanedCSVFinal.push((csvArray[f]).split(','))
  }

  //set designNumber array

  for (var x = 0; x < cleanedCSVFinal.length; x++) {
    if (cleanedCSVFinal[x][5] == 'TRUE' && cleanedCSVFinal[x][3] == 'TRUE') {
      designNumberImport.push((cleanedCSVFinal[x][1]))
    }
  }

  //for files in above directory
  for (var y = 0; y < designNumberImport.length; y++) {
    for (var i = 0; i < items.length; i++) {
      var isJSON = false;
      if (items[i].indexOf('.json') > -1) {
        isJSON = true
      }
      if (isJSON == false) {
        continue
      }

      var currentFile = fs.readFileSync(directoryJSON + '/' + items[i])
      var fileJSON = JSON.parse(currentFile);



      //set export file name
      var exportFileName = (items[i].replace("NAME", designNumberImport[y]))
      var exportDirectory = '/Users/brennan/Downloads/render-tool-update/render_json';

      fileJSON['ID'] = exportFileName.replace('.json', '');
      fileJSON['Sku'] = exportFileName.replace('.json', '');
      fileJSON['Backgrounds'][0]['Path'] = 'backgrounds/presets/' + designNumberImport[y] + '.jpg'
      fileJSON['Backgrounds'][1]['Path'] = 'backgrounds/presets/' + designNumberImport[y] + '.jpg'
      fileJSON['Backgrounds'][2]['Path'] = 'backgrounds/presets/' + designNumberImport[y] + '.jpg'
      fileJSON['Backgrounds'][3]['Path'] = 'backgrounds/presets/' + designNumberImport[y] + '.jpg'
      //console.log(fileJSON['Backgrounds'])

      let exportData = JSON.stringify(fileJSON, null, 2);

      //export file
      fs.writeFileSync(exportDirectory + '/' + exportFileName, exportData);
      //console.log('export to ' + exportDirectory + '/' + exportFileName)


      if (exportFileName == items[i]) {
        console.log("updated file " + items[i])
      } else {
        console.log('saving ' + items[i] + ' as ' + exportFileName)

      }




    }

  }
})
