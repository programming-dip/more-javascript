const apiUrl = "https://v2.jokeapi.dev/joke/Programming?type=single";

const loadData = async()=>{
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data.joke);

}

loadData();