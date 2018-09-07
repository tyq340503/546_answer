/**
 * 
 * @param {string[]} s
 * @return {boolean} 
 */
function isPalindrome(s) {
    if (!(s instanceof Array)) throw "The input is not an array!";
    
    res = s.join("").toLowerCase();
    for (let lo = 0, hi = res.length - 1; lo < hi; lo++, hi--) {
        if (res[lo] !== res[hi]) return false;
    }
    return true;
}

/**
 * 
 * @param s: stirng
 * @return matchRes: string[] 
 */
function simplify(s) { 
    if (typeof s !== "string") throw "You must provide a string type input";
    let matchRes = s.match(/[0-9a-zA-Z]+/g);
    return matchRes;    
}

module.exports = {
    isPalindrome: isPalindrome,
    simplify: simplify
}

// console.log(isPalindrome("Madam"));
// console.log(isPalindrome("Was it a cat I saw?"));
// console.log(isPalindrome("He did, eh?"));
// console.log(isPalindrome("Go hang a salami, I’m a lasagna hog."));
// console.log(isPalindrome("Poor Dan is in a droop"));
// console.log(isPalindrome("Taco cat? Taco cat."));
// console.log(isPalindrome("wocale"));