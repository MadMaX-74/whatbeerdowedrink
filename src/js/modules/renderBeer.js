const renderBeer = ({ brand, name, style, hop, ibu, alcohol, blg, malts, yeast }) => {
    const app = document.getElementById('app');
    let beer = document.createElement('div');
    beer.classList.add('beer');
    beer.innerHTML = `
    <div class="beer-card">
                <h2 class="beer-card__title">Bear for today</h2>
                <p class="beer-card__brand">Brand: ${brand}</p>
                <p class="beer-card__name">Name: ${name}</p>
                <p class="beer-card__style">Style: ${style}</p>
                <p class="beer-card__hop">Hop: ${hop}</p>
                <p class="beer-card__ibu">IBU: ${ibu}</p>
                <p class="beer-card__alcohol">Alcohol: ${alcohol}</p>
                <p class="beer-card__blg">Blg: ${blg}</p>
                <p class="beer-card__malts">Malts: ${malts}</p>
                <p class="beer-card__yeast">Yeast: ${yeast}</p>
            </div>
    `
    app.append(beer);
};

export default renderBeer;