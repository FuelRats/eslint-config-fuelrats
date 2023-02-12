/**
 * Compares 2 strings for equality, ignoring letter casing.
 * @param {string} str1
 * @param {string} str2
 * @returns {boolean}
 */
const equalsIgnoreCase = (str1, str2) => {
  return str1.toLowerCase() === str2.toLowerCase();
};





module.exports = equalsIgnoreCase;
