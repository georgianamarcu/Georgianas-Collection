import collection from "./collection-data.js";



const generateCards = () => {   
        let movieCollection = document.createElement('ul');
        movieCollection.classList.add('cards');
        let script = document.querySelector('script');
        let body = document.querySelector('body');
        body.insertBefore(movieCollection, script);

    collection.forEach(movie => {
        
        let list = document.createElement('li');
        movieCollection.appendChild(list);
        let card = document.createElement('a');
        card.classList.add('card');
        movie.genre.forEach((genre) =>{
        card.classList.add(genre.replace(' ',''));
    })
 
        list.appendChild(card);

        card.insertAdjacentHTML('afterbegin',`<img src=${movie.picture} class="card_image">`);
        let overlay = document.createElement('div');
        overlay.classList.add('card_overlay');
        card.appendChild(overlay);

        let header = document.createElement('div');
        header.classList.add('card_header');
        overlay.appendChild(header);

        let text = document.createElement('div');
        text.classList.add('card__header-text');
        header.appendChild(text);

        text.insertAdjacentHTML('afterbegin',`<h2 class = "name">${movie.name}</h2>`);

        let details = document.createElement('div');
        details.classList.add('movie-details');
        text.appendChild(details);

        details.insertAdjacentHTML('beforeend',`<p class = "releaseYear">${movie.releaseYear}</p>`);
        details.insertAdjacentHTML('beforeend', `<p class = "genre">${movie.genre}</p>`);

        text.insertAdjacentHTML('beforeend', `<p class = "director">${movie.director}</p>`)

        header.insertAdjacentHTML('beforeend', `<p class ="description">${movie.shortDescription}</p>`)
        header.insertAdjacentHTML('beforeend', `<a href=${movie.trailer} target="_blank" class="youtube"><i class = "lni lni-youtube"></i></a>`)

    })
}

export default generateCards