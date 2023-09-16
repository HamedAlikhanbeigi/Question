for(let i=10;i<=99;i++){
    let odd=i%10;
    if(odd%2!==0){
       let odd1=Math.floor(i/10);
       if(odd1%2!==0){
        console.log(i);
       }
    }
}