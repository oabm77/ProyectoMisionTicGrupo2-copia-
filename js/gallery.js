const images = document.querySelectorAll('.img_gallery');
const imagesLight = document.querySelector('.add_img');
const lightContainer = document.querySelector('.img_light');
const menu1 = document.querySelector('.menu');

images.forEach(image => {
    image.addEventListener('click', ()=>{
        showImage(image.getAttribute('src'));
    });
});

lightContainer.addEventListener('click', (e)=>{
    if(e.target !== imagesLight) {
        lightContainer.classList.toggle('show');
        imagesLight.classList.toggle('show_img');
        menu1.style.opacity = '1';
    }
});

const showImage = (image)=>{
    imagesLight.src = image;
    lightContainer.classList.toggle('show');
    imagesLight.classList.toggle('show_img');
    menu1.style.opacity = '0';
}