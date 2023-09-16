let Counter=0;
let Total=0;
function Multiple4(num){
    let number=num/4;
    for(let i=1;i<=number;i++){
        let multiplication=i*4;
        Counter+=1;
        let Divided=num/multiplication;
        Total+=Divided;
        console.log(Divided);
        
    }
    console.log('counter:',Counter);
    console.log('Total:',Total);
}
Multiple4(100);