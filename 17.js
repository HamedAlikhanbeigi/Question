let Month=1;
function dayofYear(num){
    if(num>=1&&num<=31){
       console.log(Month,'/',num); 
    }else if(num>=32&&num<=62){
        Month+=1;
        num=num-31;
        console.log(Month,'/',num);
    }else if(num>=63&&num<=93){
        Month+=2;
        num=num-62;
        console.log(Month,'/',num);
    }else if(num>=94&&num<=124){
        Month+=3;
        num=num-93;
        console.log(Month,'/',num);
    }else if(num>=125&&num<=155){
        Month+=4;
        num=num-124;
        console.log(Month,'/',num);
    }else if(num>=156&&num<=186){
        Month+=5;
        num=num-155;
        console.log(Month,'/',num);
    }else if(num>=187&&num<=216){
        Month+=6;
        num=num-186;
        console.log(Month,'/',num);
    }else if(num>=217&&num<=246){
        Month+=7;
        num=num-216;
        console.log(Month,'/',num);
    }else if(num>=247&&num<=276){
        Month+=8;
        num=num-246;
        console.log(Month,'/',num);
    }else if(num>=277&&num<=306){
        Month+=9;
        num=num-276;
        console.log(Month,'/',num);
    }else if(num>=307&&num<=336){
        Month+=10;
        num=num-306;
        console.log(Month,'/',num);
    }else if(num>=337&&num<=365){
        Month+=11;
        num=num-336;
        console.log(Month,'/',num);
    }

}
 dayofYear(365) ;