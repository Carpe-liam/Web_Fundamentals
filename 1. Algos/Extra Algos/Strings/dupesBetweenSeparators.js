/* 
Given to alumni by Riot games in 2021
Given a string containing words between multiple different separators,
return an array of all the words that are duplicates.
Separators:
  \t
  -
  ;
  :
  space character
*/

const str1 = "to be,; --or\tnot  : ;;; to-:: be";
const expected1 = ["to", "be"];

/**
 * Finds all duplicated words in a string with the following separators:
 * spaces, tabs, hyphens, commas, colons, and semicolons.
 * Time: O(?).
 * Space: O(?).
 * @param {string} s
 * @returns {Array<string>} The found dupe words.
 */
function dupesBetweenSeparators(s) {}

module.exports = { dupesBetweenSeparators };

/*****************************************************************************/