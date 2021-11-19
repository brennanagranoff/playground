const fs = require("fs");
const request = require("request");

async function download(url, path, callback) {
  request.head(url, (err, res, body) => {
    request(url).pipe(fs.createWriteStream(path)).on("close", callback);
  });
}

//Import JSON
var pawsJSON = fs.readFileSync("paws-pallete-old.json");
var pawsPallete = JSON.parse(pawsJSON).category;

async function main() {
  for (let i = 0; i < pawsPallete.length; i++) {
    var section = pawsPallete[i].pallet;
    for (let p = 0; p < section.length; p++) {
      var design = section[p];
      var thumbnailURL = design.thumbnail;
      var exportPath = `thumbnails/${design.name}-thumbnail.jpg`;
      await download(thumbnailURL, exportPath, () => {
        console.log(`✅ Downloaded ${design.name}`);
      });
    }
  }
}

main();
