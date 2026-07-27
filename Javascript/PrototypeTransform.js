String.prototype.star = function () {
    return this.split("").join("*");
};

let str = "Sanskriti";
let str1 = "Deesha";

console.log(str.star());
console.log(str1.star());