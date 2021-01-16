const btnOpen = document.getElementById('phone');
const btnClose = document.getElementById('modal__close');
const modal = document.getElementById('wrapper-modal');
const overlay = document.getElementById('overlay');

btnOpen.addEventListener('click', () => {
    modal.classList.add('active');
});

const closeModal = () => {
    modal.classList.remove('active');
}

overlay.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal);

$(document).ready(function(){
    $('.offer__sliders').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false,
        autoplay: true
    });
});

