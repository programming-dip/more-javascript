const fetchData = ()=> {
    return new Promise((resolve,reject) => {
        const status = true;
        if(status) {
            const mockData = {
                json:()=> { return Promise.resolve({name:"Anudip"})}
            };
            resolve(mockData);
        } else {
            reject ("server error");
        }
    });
};

fetchData()
.then(res=>res.json())
.then(data => console.log(data))
.catch (err => console.log(err))