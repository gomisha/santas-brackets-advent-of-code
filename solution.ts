const fs = require('fs');

const FILE = "test/test3.txt";

fs.readFile(FILE, (err: any, data: any) => {
    if(err) {
        console.log("err", err);
    }
    else {
        countFloors(data.toString());
    }
})

function countFloors(rawData: string): void {
    rawData.length;
    let floors = 0;
    let firstBasementChar = 0;
    let enteredBasement = false;

    for(let i=0; i<rawData.length; i++) {
        if(rawData[i] == "(") floors++
        else if(rawData[i] == ")") floors--

        if(floors == -1 && !enteredBasement) {
            firstBasementChar = i+1;
            enteredBasement = true; //so don't reset the var - only do it once
        }
    }

    console.log("floors", floors);
    console.log("firstBasementChar", firstBasementChar);
}