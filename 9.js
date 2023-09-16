let Remaining;
let Divide;
for(let i=10;i<100;i++){
    Remaining=i%10;
    Divide=Math.floor(i/10);
    if(Remaining===Divide){
        console.log(i);
    }
}