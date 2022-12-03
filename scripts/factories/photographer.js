function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
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
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(infoParagraphContainer);
        infoParagraphContainer.appendChild(location);
        infoParagraphContainer.appendChild(taglineParagraph);
        infoParagraphContainer.appendChild(dailyRate);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}