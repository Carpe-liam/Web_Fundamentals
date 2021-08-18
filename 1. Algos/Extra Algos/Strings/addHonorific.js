/* 
  Given an honorific (name title) and array of full name strings,
  in "LastName, FirstName" format
  
  Return a new array of strings in this format: "Honorific FirstName LastName"

  Bonus: re-write it with built in functional programming methods
*/

const honorific1 = "Mr.";
const names1 = [];
const expected1 = [];

const honorific2 = "Sir";
const names2 = ["Sanchez, Rick", "Smith, Jerry"];
const expected2 = ["Sir Rick Sanchez", "Sir Jerry Smith"];

const honorific3 = "Mrs.";
const names3 = ["HorseDoctor, Beth"];
const expected3 = ["Mrs. Beth HorseDoctor"];

/**
 * Adds the given honorific to the given fullNames and formats the full names.
 * @param {string} honorific The honorific to be added to the fullNames.
 *    e.g., "Sir", "Mrs.", etc.
 * @param {Array<string>} fullNames Formatted as "LastName, FirstName".
 * @returns {Array<string>} The full names formatted as:
 *    "honorific FirstName LastName".
 * - Time: O(?).
 * - Space: O(?).
 */
function addHonorific(honorific, fullNames) {}

function addHonorificFunctional(honorific, fullNames) {}

module.exports = {
  addHonorific,
  // addHonorific: addHonorificFunctional
};

/*****************************************************************************/
