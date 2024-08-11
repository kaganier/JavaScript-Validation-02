function checkNameLength(name) {
    let lengthOfName = name.length;

    if (lengthOfName < 5) {
        console.log("You will marry soon!");
    } else if (lengthOfName === 5 || lengthOfName === 7) {
        console.log("You will encounter a once in a lifetime opportunity!");
    } else {
        console.log("Your future is full of surprises!");
    }
}

function checkFirstCharacter(name) {
    let firstCharacter = name[0];
    console.log("First letter is " + firstCharacter);

    if (firstCharacter === "R") {
        console.log("You will be rich!");
    }
}

function checkForNewRomance(name) {
    let newRomance = name.includes("i");

    if (newRomance) {
        console.log("The Universe has a new whirlwind romance in store for you SOON!");
    }
}

