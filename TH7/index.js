
/*
    input: money, numberOfProduct
    output:product
    list:
     -pepsi:2$
     -coca:2$
     -c2:1$
     -nutri boots:2$
     -revine:1$
     -tra xanh 0 d0:2$

*/
function vendinngMachine(numberOfProduct){
    switch(numberOfProduct){
        case 1:
            console.log("pepsi");
            return 2;
        case 2:
            console.log("coca");
            return 2;
        case 3:
            console.log("c2");
            return 1;
        case 4:
            console.log("nutri boots");
            return 2;
        case 5:
            console.log("revine");
            return 1;    
        case 6:
            console.log("tra xanh 0 do");
            return 2;
        default:
            return 0;
    }
    
}
let total = +prompt("Please insert money");
if(isNaN(total)){
    console.log("có làm mới có ăn")
}else if(!isNaN(total) && total>0 && parseInt(total)===total){
    while(total>0){
        let numberOfProduct = +prompt("please number of product:");
        let price = vendinngMachine(numberOfProduct);
        if(price<=total){
            console.log("sản phẩm đã được thanh toán,số dư của bạn còn :",total-= price);
        }else{
            console.log("sản phẩm không được thanh toán do số dư của bạn chỉ còn",total);
            break;
        }
    }
}
