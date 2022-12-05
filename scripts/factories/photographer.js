function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `./assets/photographers/${portrait}`;
// Creates home page photographer card
    function getUserCardDOM() {
        
        const article = document.createElement( 'article' );
        
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        const link = document.createElement( 'a' );
        link.setAttribute("href", `photographer.html?id=${id}`);
        
        const infoParagraphContainer = document.createElement( 'div' );
        infoParagraphContainer.classList.add("infoParagraphContainer");
        
        const location = document.createElement( 'p' );
        location.textContent = `${city}, ${country}`;
        location.classList.add("location");
        
        const taglineParagraph = document.createElement( 'p' );
        taglineParagraph.textContent = tagline;
        taglineParagraph.classList.add("tagline");
        
        const dailyRate = document.createElement( 'p' );
        dailyRate.textContent = `${price}€/jour`;
        dailyRate.classList.add("dailyRate");
        
        
        article.appendChild(link);
        link.appendChild(img);
        link.appendChild(h2);
        article.appendChild(infoParagraphContainer);
        infoParagraphContainer.appendChild(location);
        infoParagraphContainer.appendChild(taglineParagraph);
        infoParagraphContainer.appendChild(dailyRate);
        return (article);
    }
    return { name, picture, getUserCardDOM, id }
}