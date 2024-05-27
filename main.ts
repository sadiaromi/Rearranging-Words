// ========================================== Q#2 =====================================================

// ----------------------------------- REARRANGING WORDS ----------------------------------------



function rearrangeArray(scrambledArray: (string | boolean | number)[]) {
      

    const stringArray = scrambledArray.map(item => String(item));

    const filteredArray = stringArray.filter(item => item !== "");

    const rearrangedArray = [
        filteredArray[4], filteredArray[8], filteredArray[16], filteredArray[0],"of",filteredArray[6], 
    ];

    return rearrangedArray;
}

const scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
const result = rearrangeArray(scrambledArray);

console.log(result.join(" ")); 



