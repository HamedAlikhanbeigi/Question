function multipleThree(num1,num2){
if(num1>num2){
    for(let i=num2;i<=num1;i++){
        if(i%3===0){
            console.log(i);
        }
    }

}
 else if(num2>num1){
    for(let i=num1;i<=num2;i++){
        if(i%3===0){
            console.log(i);
        }
    }  

}
else{
    console.log('It has no multiple');
}
}
multipleThree(45,2)
