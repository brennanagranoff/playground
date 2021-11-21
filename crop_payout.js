"use strict";

const fs = require("fs");
const path = require("path");
const { Parser } = require("json2csv");

//Import CSV
var csvImport = fs.readFileSync("crop_payout.csv", "utf8").replace(
  /(["'])(?:(?=(\\?))\2.)*?\1/g, // REGEX to find text in quotes
  function (match, capture) {
    // Pass result to a function to modify further
    return match.replace(/\,/g, ""); // REGEX to remove all ","
  }
);
var csvArray = csvImport.split(/\r?\n/);
var cleanedCSVFinal = [];
for (var f = 1; f < csvArray.length; f++) {
  cleanedCSVFinal.push(csvArray[f].split(","));
}

//Import JSON
var payoutSettingsJSON = fs.readFileSync("crop_payout.json");
var payoutSettings = JSON.parse(payoutSettingsJSON);

//Initialize Variables
var referralPayouts = [];
var payouts = [];
var publicOutput = [];

//Loop Through Rows
for (let i = 0; i < cleanedCSVFinal.length; i++) {
  //Set Vars For This Loop
  var referallPayoutInstance = {};
  var user;

  //Parse ID and Total Crops From HoopDash Export
  const id = parseInt(cleanedCSVFinal[i][0].replaceAll('"', ""));
  const totalCrops = parseInt(cleanedCSVFinal[i][4].replaceAll('"', "").replaceAll(",", ""));
  const firstNane = cleanedCSVFinal[i][1].replaceAll('"', "").toLowerCase();
  const lastName = cleanedCSVFinal[i][2].replaceAll('"', "").toLowerCase();
  //Check if any crops
  if (totalCrops > 20) {
    //Match Up To Settings JSON
    user = payoutSettings.find((x) => x["id"] == id);

    //Make Sure User Exists
    if (user !== undefined) {
      if (user["hourly"] == false) {
        //Intial Data Standardizing
        user.first_name = user["first_name"].toLowerCase();
        user.last_name = user["last_name"].toLowerCase();
        user.crop_payout = user["crop_rate"] * totalCrops;
        user.total_crops = totalCrops;
        user.total_bounty_crops = 0;
        user.total_bounty_payout = 0;
        user.total_payout = user.crop_payout;
        //Deal with referral bounty
        if (user.referral_user_id !== null && user.referral_bounty !== null) {
          referallPayoutInstance.user_id = user.referral_user_id;
          referallPayoutInstance.crops = user.total_crops;
          referallPayoutInstance.payout = user.referral_bounty * user.total_crops;
          referralPayouts.push(referallPayoutInstance);
        }

        var public_user = user;

        publicOutput.push(public_user);

        //Export User
        payouts.push(user);

        //console.log(`mage_essfully Calculated for ${capitalizeFirstLetter(user.first_name)} ${capitalizeFirstLetter(user.last_name)}`);
        //mage_es Message
      }
    } else {
      console.log(`User Missing From crop_payout.json: ${capitalizeFirstLetter(firstNane)} ${capitalizeFirstLetter(lastName)} (ID: ${id})`);
    }
  }
}

//Add Referrals To Payouts
for (let t = 0; t < referralPayouts.length; t++) {
  const referralBounty = referralPayouts[t];
  //Get the Index of the User That Needs to Get Referral Bounty
  var referralUser = payouts.findIndex((x) => x.id == referralBounty.user_id);
  if (referralUser > -1) {
    //Add Users Bounty Crops to the Referring User
    payouts[referralUser].total_bounty_crops += referralBounty.crops;
    payouts[referralUser].total_bounty_payout += referralBounty.payout;
    payouts[referralUser].total_payout = referralBounty.payout + payouts[referralUser].crop_payout;
  }
}

if (payouts.length > 0) {
  //Convert to CSV
  const json2csvParser1 = new Parser();
  const internalPayout = json2csvParser1.parse(payouts);

  //Write CSV File
  fs.writeFile("crop_payout_output_internal.csv", internalPayout, "utf8", function () {
    console.log("mage_essfully Exported crop_payout_output_internal.csv");
  });

  //Clean & Remove Fields for Public Output
  for (let p = 0; p < publicOutput.length; p++) {
    delete publicOutput[p].crop_rate;
    delete publicOutput[p].referral_bounty;
    delete publicOutput[p].hourly;
    delete publicOutput[p].crop_payout;
    delete publicOutput[p].total_bounty_payout;
    delete publicOutput[p].total_payout;
    delete publicOutput[p].total_bounty_crops;
    delete publicOutput[p].payment_method;
    delete publicOutput[p].payment_info;
  }

  const json2csvParser2 = new Parser();
  const externalPayout = json2csvParser2.parse(publicOutput);

  fs.writeFile("crop_payout_output_public.csv", externalPayout, "utf8", function () {
    console.log("mage_essfully Exported crop_payout_output_public.csv");
  });
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
