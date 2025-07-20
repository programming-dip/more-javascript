const loadData = async()=> {
    console.log("First Data");
    console.log("Second Data");

try{
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    console.log(data);
} catch(error) {
    console.log(error);
}
    
    console.log("after fetch");
}

loadData();