// Nous déclarons une variable qui sera le total de nos photos
let totalPhotos = 1

// Mise en place d'un param nbPhotos avec une valeur par défaut
function createGallery(nbPhotos = 12) {
    let gallery = document.querySelector('#gallery')
    for (let i = 0; i <= nbPhotos; i++) {
        gallery.innerHTML += `
        <div class="col-3 mt-2 text-center">
            <a href="https://picsum.photos/480/640?random=${totalPhotos}" data-lightbox="gallery" data-title="Une belle photo du site Lorem Picsum">
            <img class="img rounded border border-5" src="https://picsum.photos/480/640?random=${totalPhotos}"
            alt="Une photo du site Lorem Picsum">
            </a>
        </div>
        `
        // ne pas oublier d'incrémenter la variable
        totalPhotos++
    }
}


// on appelle la fonction au chargement de la page
createGallery()

// détection du scroll en bas de la page
window.addEventListener('scroll', () => {
    // window.scrollY = distance de scroll
    // window.innerHeight = partie visible de l'écran
    // rajout de 100px en raison de l'écran de test
    if (window.scrollY + window.innerHeight + 90 >=
        document.documentElement.scrollHeight) {
        createGallery(8)
    }
})