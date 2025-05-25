// ===== ПАРАЛЛАКС ЭФФЕКТ (двигается при скролле и курсоре) =====
const parallaxBg = document.querySelector('.parallax-bg');

// Движение фона при скролле
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    parallaxBg.style.transform = `translateY(${scrollY * 0.3}px)`;
});

// Движение фона при движении мыши
document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth - e.pageX) / 50;
    const y = (window.innerHeight - e.pageY) / 50;
    parallaxBg.style.transform += ` translate(${x}px, ${y}px)`;
});

// ===== ПОЯВЛЕНИЕ СЕКЦИЙ ПРИ СКРОЛЛЕ =====
const sections = document.querySelectorAll('.content-section');

function checkScroll() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.8) {
            section.classList.add('visible');
        }
    });
}

// Запускаем при загрузке и при скролле
window.addEventListener('load', checkScroll);
window.addEventListener('scroll', checkScroll);

// ===== ПЛАВНАЯ ПРОКРУТКА ДЛЯ МЕНЮ =====
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// ===== ИНТЕРАКТИВНЫЕ ЭФФЕКТЫ ДЛЯ КАРТИНОК =====
const images = document.querySelectorAll('.content img');

images.forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.05) rotate(1deg)';
        img.style.boxShadow = '0 15px 40px rgba(0, 170, 255, 0.4)';
    });

    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
        img.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.7)';
    });
});

// ===== ДОПОЛНИТЕЛЬНЫЕ АНИМАЦИИ (по желанию) =====
// Мигающий неоновый эффект для заголовка
const title = document.querySelector('h1');

setInterval(() => {
    title.style.textShadow = `0 0 ${10 + Math.random() * 20}px var(--main-color)`;
}, 1000);

// Эффект "волны" для футера
const footer = document.querySelector('footer');

footer.addEventListener('mousemove', (e) => {
    const x = e.pageX / window.innerWidth * 100;
    footer.style.background = `linear-gradient(90deg, rgba(10, 10, 20, 0.9) ${x}%, rgba(0, 50, 80, 0.7) ${x + 20}%)`;
});