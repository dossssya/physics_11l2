document.addEventListener('DOMContentLoaded', () => {
    // Авто-слайдер для радиолокации
    const radarTabs = document.querySelectorAll('#radar-slider .tab');
    autoTabSlider(radarTabs);

    // Авто-слайдер для телевидения
    const tvTabs = document.querySelectorAll('#tv-slider .tab');
    autoTabSlider(tvTabs);
});

function autoTabSlider(tabs) {
    let currentIndex = 0;

    setInterval(() => {
        tabs[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % tabs.length;
        tabs[currentIndex].classList.add('active');
    }, 5000);
}
