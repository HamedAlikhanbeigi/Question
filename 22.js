for(let i=100;i<=999;i++){
    let one=i%10;
    if(one%2!==0){
        let Villagers=Math.floor(i/10);
        let reVillagers=Villagers%10;
        if(reVillagers%2===0){
            let hundreds=Math.floor(Villagers/10);
            if(hundreds%2!==0){
                if(one===hundreds){
                    console.log(i);
                }
            }
        }
    }
}