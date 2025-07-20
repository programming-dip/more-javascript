const fetchData = ()=> {
    return new Promise ((response, reject) => {
        const status = true;
        
        if(status){

            const sampleData = {
                json: ()=> {
                    return Promise.resolve({name: "Anudip"})
                }
            }
            response(sampleData);
        }else{
            reject("Server error!");
        }
    })
};

fetchData()
.then(res => res.json())
.then(data => console.log(data))
.catch (err => console.log(err));