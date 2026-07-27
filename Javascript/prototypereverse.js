String.prototype.reverse = function () {
    return this.split("").reverse().join("");
};

let str = "Sanskriti";
let str1 = "Deesha";

console.log(str.reverse());
console.log(str1.reverse());