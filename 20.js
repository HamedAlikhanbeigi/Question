
for(let i=1000;i<=9999;i++){
let One=i%10
if(One%2===0){
    let Villagers=Math.floor(i/10);
    let reVillagers=Villagers%10;
    if(reVillagers%2!==0){
        let hundreds=Math.floor(Villagers/10);
        let reHundreds=hundreds%10;
        if(reHundreds%2===0){
            let thousand=Math.floor(hundreds/10);
            let reThousand=thousand%10;
            if(reThousand%2!==0){
                console.log(i);
            }
        }
    }
}
}