

//BASIC CALCULATOR
//Additon 

var addition=(a:number,b:number)=>{
    var sum:number=(a+b);
    console.log("The sum of two number is:"+sum);
    window.document.body.innerHTML +=`<dt>The Sum of two number is</dt> <dd>${sum}</dd>`;

}

addition(3,4);

//SUBTRACTION
var subtraction=(a:number,b:number)=>{
    if(a>b){
        var difference:number=(a-b);
    }
    else{
        var difference:number=(b-a);
    }
    
    console.log("The difference between two number is:"+difference);
    window.document.body.innerHTML +=`<dt>The differnce of two number is</dt> <dd>${difference}</dd>`;
}

subtraction(10,50);


//multiplication
var multiply=(a:number,b:number)=>{
    var multiply:number=(a*b);
    console.log("The Product of two number is:"+multiply);
    window.document.body.innerHTML +=`<dt>The Product of two number is</dt> <dd>${multiply}</dd>`;
}

multiply(14,4);

//Division
var divide=(a:number,b:number)=>{
    if(a>b){
        var divide:number=(a/b);
    }
    else{
        var divide:number=(b/a);
    }
    
    console.log("The division of two number is:"+divide);
    window.document.body.innerHTML +=`<dt>The Division  of two number is</dt> <dd>${divide}</dd>`;
}

divide(12,48);

