const Axios = require('axios');

//Can we get API Data if we didn't handle anything to this asynchronous GET Function?  
const getDittoNoHandle = () => {
    const response = Axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
    console.log({ data: response.data, status: 'No Asynchronous Handle Success' });
}

// Get API Data by Callback Function Way. 
const getDittoCallback = () => {
    try {
        Axios.get('https://pokeapi.co/api/v2/pokemon/ditto', response => {
            console.log({ data: response.data, status: 'Callback Success.' });
        })
    } catch (err) {
        console.log({ data: err, status: 'Callback Failed.' });
    }
}

// Get API Data by Promise Way. 
const getDittoPromise = () => {
    Axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(response => {
            console.log({ data: response.data, status: 'Promise Success.' });
        })
        .catch(err => {
            console.error({ error: err, status: 'Promise Failed.' });
        })
};

// Get API Data by Async-Await Way.  
const getDittoAsyncAwait = async() => {
    try {
        const response = await Axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
        console.log({ data: response.data, status: 'Async-Await Success' });
    } catch (err) {
        console.log({ error: err, status: 'Async-Await Failed.' });
    }
};


getDittoNoHandle(); // Return Data as Undefined (It's mean success.) 
getDittoCallback(); // Running Failed. 
getDittoPromise(); // Running Success.
getDittoAsyncAwait(); // Running Success.