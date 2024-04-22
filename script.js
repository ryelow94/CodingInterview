var input = document.getElementById("input")
var output = document.getElementById("output")
var tally = document.getElementById("tally")
var form = document.getElementById("formText")

var outputText = document.getElementById("outputText")
var tallyText = document.getElementById("tallyText")
var tallyObject = {
    Corrections: 0
}
//height adjust on input of text 

function calcHeight(value) {
    let numberOfLineBreaks = (value.match(/\n/g) || []).length;
    // min-height + lines x line-height + padding + border
    let newHeight = 20 + numberOfLineBreaks * 20 + 12 + 2;
    return newHeight;
  }

input.addEventListener("input", () => {
input.style.height = calcHeight(input.value) + "px";
});

//form submission handling function
form.addEventListener("submit", (e) => {
    e.preventDefault();
    tally.style.height = "fit-content"
    output.style.height = "fit-content"


    outputText.innerText = input.value.replaceAll("His", "His/Her")
    outputText.innerText = outputText.innerText.replaceAll(/[^\n\His]\bhis\b/igm, " his/her")


    outputText.innerText = outputText.innerText.replaceAll("big manly voice", "assertive voice");

    //tally of corrections

    var split = outputText.innerText.split(" ")
    console.log(split)
    let count = 0;
    for (let i = 0; i < split.length; i++) {
        const element = split[i];
        if ((element.includes("His/Her")) || (element.includes("his/her"))) {
            count++

        }
    }
    if (outputText.innerText.includes("assertive voice") && !input.value.includes("assertive voice")) {
        count++
    }

    tallyObject.corrections = count


    for (const [key, value] of Object.entries(tallyObject)) {
        tallyText.innerText = (`{ \n
            "${key}": "${value}" \n
        }`);
    }

});