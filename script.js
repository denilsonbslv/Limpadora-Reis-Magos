// Código JavaScript para futuras interações

document.addEventListener("DOMContentLoaded", () => {
    const carouselInner = document.querySelector(".carousel-inner");
    const carousel = document.querySelector(".carousel");
    const imagePaths = [
        "avaliacoes/01.jpg",
        "avaliacoes/02.jpg",
        "avaliacoes/03.jpg",
        "avaliacoes/04.jpg",
        "avaliacoes/05.jpg",
        "avaliacoes/06.jpg",
        "avaliacoes/07.jpg"
    ];

    imagePaths.forEach((path, index) => {
        const img = document.createElement("img");
        img.src = path;
        img.alt = `Avaliação ${index + 1}`;
        carouselInner.appendChild(img);
    });

    let currentIndex = 0;

    const updateCarousel = () => {
        const offset = -currentIndex * 100;
        carouselInner.style.transform = `translateX(${offset}%)`;
    };

    // Troca automática de imagens a cada 3 segundos
    setInterval(() => {
        currentIndex = (currentIndex + 1) % imagePaths.length;
        updateCarousel();
    }, 3000);

    // Adiciona evento de clique no carrossel
    carousel.addEventListener("click", () => {
        window.open(
            "https://www.google.com/maps/place/Limpa+Fossa+Reis+Magos/@-5.8563267,-35.1991669,44471m/data=!3m1!1e3!4m18!1m9!3m8!1s0x2e23c5f4c5d58a3d:0x259e03b89aa6afc5!2sLimpa+Fossa+Reis+Magos!8m2!3d-5.845899!4d-35.2111008!9m1!1b1!16s%2Fg%2F11sbd_pqsn!3m7!1s0x2e23c5f4c5d58a3d:0x259e03b89aa6afc5!8m2!3d-5.845899!4d-35.2111008!9m1!1b1!16s%2Fg%2F11sbd_pqsn?entry=ttu&g_ep=EgoyMDI1MDQwNy4wIKXMDSoASAFQAw%3D%3D",
            "_blank"
        );
    });

    // Inicializa o carrossel
    carouselInner.style.width = `${imagePaths.length * 100}%`;
    updateCarousel();
});
