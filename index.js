console.log("Hello from Index.js")


let myName;
myName = "Ruthie-Anne";

let lengthOfName = myName.length;
if(lengthOfName < 5) {
    console.log("You will marry soon!");
}
else if(lengthOfName > 7) {
    console.log("You will marry late in life");
}
if (lengthOfName === 5 || lengthOfName === 7) {
    console.log("You will encounter a once in a lifetime opportunity!");
}

let firstCharacter = myName[0];
console.log("first letter is " + firstCharacter);
if(firstCharacter === "R") {
    console.log("You will be rich !")
}

let newRomance = myName.includes("i");
if(newRomance) {
    console.log("The Universe has new whirlwind romance in store for you SOON!");
}
