
let count = 0;
const clockID = setInterval(() => {
    count++;
    console.log(count);

    if(count >=5){
        clearInterval(clockID);
    }
}, 2000);

console.log(clockID);
