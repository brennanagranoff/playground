"use strict";

const fs = require("fs");
const path = require("path");
const { Parser } = require("json2csv");

//Import CSV
var csvImport = fs.readFileSync("crop_payout.csv", "utf8");
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

//Loop Through Rows
for (let i = 0; i < cleanedCSVFinal.length; i++) {
  //Set Vars For This Loop
  var referallPayoutInstance = {};
  var user;

  //Parse ID and Total Crops From HoopDash Export
  const id = parseInt(cleanedCSVFinal[i][0].replaceAll('"', ""));
  const totalCrops = parseInt(cleanedCSVFinal[i][4].replaceAll('"', ""));

  //Match Up To Settings JSON
  user = payoutSettings.find((x) => x["id"] == id);

  //Make Sure User Exists
  if (user !== undefined) {
    //Intial Data Standardizing
    user.first_name = user["first_name"].toLowerCase();
    user.last_name = user["last_name"].toLowerCase();
    user.crop_payout = user["crop_rate"] * totalCrops;
    user.total_crops = totalCrops;
    user.total_bounty_crops = 0;
    user.total_bounty_payout = 0;
    user.total_payout = 0;
    //Deal with referral bounty
    if (user.referral_user_id !== null && user.referral_bounty !== null) {
      referallPayoutInstance.user_id = user.referral_user_id;
      referallPayoutInstance.crops = user.total_crops;
      referallPayoutInstance.payout = user.referral_bounty * user.total_crops;
      referralPayouts.push(referallPayoutInstance);
    }
    //Export User
    payouts.push(user);
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

//Convert to CSV
const json2csvParser = new Parser();
const csv = json2csvParser.parse(payouts);

//Write CSV File
fs.writeFile("crop_payout_output.csv", csv, "utf8", function () {});
