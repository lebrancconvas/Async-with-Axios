const Axios = require('axios');

const getDittoPromise = () => {
    Axios.get('https://pokeapi.co/api/v2/pokemon/ditto').then(response => {
        console.log(response.data);
    })
}

const getDittoAsyncAwait = async() => {
    const response = await Axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
    console.log(response.data);
}

getDittoPromise();
getDittoAsyncAwait();