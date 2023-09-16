
let remainingTwo;
let remainingThree;
let remainingFive;
let remainingSeven;
const myArray=[2,3,5,7];
for(let i=3;i<1000;i++){
    remainingTwo=i%2;
    remainingThree=i%3;
    remainingFive=i%5;
    remainingSeven=i%7;
    if(remainingTwo!==0&&remainingThree!==0&&remainingFive!==0&&remainingSeven!==0){
        myArray.push(i);
    }
}

console.log(myArray);



