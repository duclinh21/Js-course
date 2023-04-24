console.log("game started");
for(let i=0;i<1000;i++){
    let number =prompt("please enter number");
    console.log(`${i} times.`);
    let random = Math.round(math.random()*2 ) ;
    if(number === random){
        console.log("winner");
    }
}
