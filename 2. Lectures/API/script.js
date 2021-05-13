function affirm(){
    console.log("howdy")
    fetch('https://swapi.dev/api/people/1/')
        .then(res => {
            console.log(res.json())
            return res.json()
        })
        .catch(error =>{
            console.log(error)
        })
    }