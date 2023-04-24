//bài 1 : tính bình phương cho từng số
let num1 = [3, 4, 5, 6, 4, 5, 6, 7, 7, 77];
let result = Array(10);
for (let i = 0; i < num1.length; i++) {
    result[i] = num1[i]**2;
    }
console.log(result);
//bài 2 : tìm số nguyên tố
let num2 = [3, 5, 6, 6, 7, 8, 8, 8, 9, 9, 33];
let songuyento = [];
for (let i = 0; i < num2.length; i++) {
    let test = 0;
    for (let j = 2; j <= Math.sqrt(num2[i]); j++) {
        if(num2[i] % j == 0 ){
            test += 1;
        }
    }if(test == 0){
        songuyento.push(num2[i]);
    }
};
console.log(songuyento);
//bài 3 : tạo một giỏ hàng hoa quả

let một = {
    name : " Sầu Riêng ",
    color: "vàng",
    price: '169000đ/Kg',
    product: "Việt Nam",
    expirationDate: '30/04/2023',
    distributionUnit : {
        nameUnit: "Sầu Riêng Online",
        address:{
            no:1,
            street:"Đội Cấn",
            district:"Q.Ba Đình",
            city:"Hà Nội",

        }
    }
}
let hai = {
     name : "Dưa Hấu ",
    color: "Xanh",
    price: '17000đ-24000đ/Kg',
    product: "Việt Nam",
    expirationDate: '30/04/2023',
    distributionUnit:{
        nameUnit: "Bách Hóa Xanh",
        address:{
            no:205,
            street:"Tam Bình",
            district:"Q.Thủ Đức",
            city:"TP.Hồ CHí Minh",
    }
},
}
   
let ba = {
    name : "Táo",
    color: "Đỏ",
    price: '21500đ/Kg',
    product: "Việt Nam",
    expirationDate: '30/04/2023',
    distributionUnit : {
        nameUnit: "Bách Hóa Xanh",
        address:{
            no:205,
            street:"Tam Bình",
            district:"Q.Thủ Đức",
            city:"TP.Hồ CHí Minh",
        }
    },
};
let cart = [một, hai, ba];
for (let i = 0; i < cart.length; i++) {
    console.log("STT: ", i+1);
    console.log('Tên sản phẩm: ', cart[i].name);
    console.log('Giá: ', cart[i].price);
    console.log('Ngày hết hạn: ', cart[i].expirationDate);
    console.log(`Đơn vị phân phối:  ${cart[i].distributionUnit.nameUnit} - ${cart[i].distributionUnit.address}`);
}

let enter = prompt('Nhập số thứ tự muốn thay đổi: ');
for (let i = 0; i < cart.length; i++) {
    if(enter == i+1){
        let update = prompt('Nhập lại ngày hết hạn: ');
        console.log(`Ngày hết hạn mới của ${cart[i].name}: `, update);
    }
}