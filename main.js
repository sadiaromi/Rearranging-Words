// ========================================== Q#2 =====================================================
// ----------------------------------- REARRANGING WORDS ----------------------------------------
function rearrangeArray(scrambledArray) {
    var stringArray = scrambledArray.map(function (item) { return String(item); });
    var filteredArray = stringArray.filter(function (item) { return item !== ""; });
    var rearrangedArray = [
        filteredArray[4], filteredArray[8], filteredArray[16], filteredArray[0], "of", filteredArray[6],
    ];
    return rearrangedArray;
}
var scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
var result = rearrangeArray(scrambledArray);
console.log(result.join(" "));
