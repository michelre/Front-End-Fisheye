import {mediaFactory} from './media.js'

class Lightbox {

    constructor(medias) {
        this.medias = medias;
        this.initEvents()
    }

    initEvents(){

    }

    render(){
        const ul = document.createElement('ul')
        for(let i = 0; i < this.medias.length; i++){
            //const mediaFactory = mediaFactory(this.medias[i])
            const mediaLi = document.createElement('li')
            //const media = mediaFactory.getUserMediaDOM() // Je dois récupérer un élément img ou video
            const media = document.createElement('img')
            media.src = `./assets/photos/${this.medias[i].photographerId}/${this.medias[i].image}`
            mediaLi.appendChild(media)
            ul.appendChild(mediaLi)
        }
        return ul

    }

}

export default Lightbox
