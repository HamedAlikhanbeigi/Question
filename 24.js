const Money=50;
let canter=0;
for(let i=10;i>=0;i-=2){
   let remaining=Money-(5*i);
   for(let j=5;j>=0;j--){
      let remaining2=remaining-(10*j);
      if(remaining2===0){
          canter+=1;
        }
        for(let f=3;f>=1;f--){
            let remaining3=remaining2-(20*f);
           if(remaining3===0){
            canter+=1;
           }
        }
    }
}
console.log(canter);