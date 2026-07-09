const galleryImages = [...document.querySelectorAll(".gallery-grid img")];

const lightbox = document.querySelector(".lightbox");

const lightboxImage = document.querySelector(".lightbox-image");

const downloadButton = document.querySelector(".lightbox-download");

const closeButton = document.querySelector(".lightbox-close");

const prevButton = document.querySelector(".lightbox-prev");

const nextButton = document.querySelector(".lightbox-next");

let currentIndex = 0;

function openImage(index){

    currentIndex = index;

    const src = galleryImages[index].src;

    lightboxImage.src = src;

    downloadButton.href = src;

    lightbox.classList.add("open");

}

galleryImages.forEach((image,index)=>{

    image.addEventListener("click",()=>{

        openImage(index);

    });

});

function closeLightbox(){

    lightbox.classList.remove("open");

}

closeButton.onclick = closeLightbox;

lightbox.addEventListener("click",(event)=>{

    if(event.target===lightbox){

        closeLightbox();

    }

});

function nextImage(){

    currentIndex=(currentIndex+1)%galleryImages.length;

    openImage(currentIndex);

}

function previousImage(){

    currentIndex=(currentIndex-1+galleryImages.length)%galleryImages.length;

    openImage(currentIndex);

}

nextButton.onclick=nextImage;

prevButton.onclick=previousImage;

document.addEventListener("keydown",(event)=>{

    if(!lightbox.classList.contains("open")) return;

    if(event.key==="Escape") closeLightbox();

    if(event.key==="ArrowRight") nextImage();

    if(event.key==="ArrowLeft") previousImage();

});