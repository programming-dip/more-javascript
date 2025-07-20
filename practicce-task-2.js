const tellJoke = ()=>{
    console.log("Sample joke here!");
}

const jokeInterval = setInterval(tellJoke,2000);

setTimeout(()=> {
    clearInterval(jokeInterval);
}, 10000);