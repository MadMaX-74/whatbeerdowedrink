import renderBeer from "./renderBeer";

const beerQuery = () => {
    fetch('https://random-data-api.com/api/beer/random_beer ')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            renderBeer(data);
        }).catch((err) => { console.warn(err); })
};

export default beerQuery;