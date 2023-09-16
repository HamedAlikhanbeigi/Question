function number(Rights){
if(Rights<50000){
    console.log('tax free',Rights); 
}
 else if(Rights>=50000&&Rights<100000){
        let tax=Rights/100*10;
        let salary=Rights-tax;
        console.log('salary:',salary);
        console.log('tax:',tax);
} else if(Rights>=100000){
    let tax=Rights/100*15;
    let salary=Rights-tax;
    console.log('salary:',salary);
    console.log('tax:',tax);
}
}
number(500000)
