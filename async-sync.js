const loadData = ()=> {
    console.log("First data");
    console.log("Second data");

    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(res=>res.json())
    .then(data=> console.log(data))

    console.log("After Fetch");
}

loadData();