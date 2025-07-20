const greetingDelay = (name, time)=> {
    setTimeout(()=>{
        console.log("Hi "+name+" !")
    },time)
}

greetingDelay("Anudip",3000);

