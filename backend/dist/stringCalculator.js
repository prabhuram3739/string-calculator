"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
function add(numbers) {
    if (!numbers)
        return 0;
    let delimiters = /[,\n]/;
    if (numbers.startsWith("//")) {
        const delimiterMatch = numbers.match(/^\/\/(.+)\n/);
        if (delimiterMatch) {
            delimiters = new RegExp(`[${delimiterMatch[1]}]`);
            numbers = numbers.slice(delimiterMatch[0].length);
        }
    }
    const numberArray = numbers.split(delimiters).map(Number);
    // Check for negatives
    const negatives = numberArray.filter((num) => num < 0);
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
    }
    return numberArray.reduce((sum, num) => sum + num, 0);
}
