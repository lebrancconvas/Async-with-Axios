const Axios = require('axios');

// Get API Data by Promise Way. 
const getDittoPromise = () => {
    Axios.get('https://pokeapi.co/api/v2/pokemon/ditto').then(response => {
        console.log(response.data);
    })
}

// Get API Data by Async-Await Way.  
const getDittoAsyncAwait = async() => {
    const response = await Axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
    console.log(response.data);
}

getDittoPromise(); // Running Success.
getDittoAsyncAwait(); // Running Success.