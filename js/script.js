
// ВАЛИДАЦИЯ ФОРМЫ КОНТАКТОВ

/**
 * Функция проверки полей формы контактов
 * Проверяет имя, email, тему и сообщение
 */
function validateContactForm() {
    // Получаем значения полей и удаляем пробелы
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const subject = document.getElementById('contact-subject').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    // Проверка имени
    if (!name) {
        alert('Пожалуйста, введите имя.');
        return false;
    }
    
    // Проверка email с помощью регулярного выражения
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        alert('Пожалуйста, введите корректный email.');
        return false;
    }
    
    // Проверка темы сообщения
    if (!subject) {
        alert('Пожалуйста, введите тему.');
        return false;
    }
    
    // Проверка текста сообщения
    if (!message) {
        alert('Пожалуйста, введите сообщение.');
        return false;
    }
    return true;
}




// МОДАЛЬНОЕ ОКНО ГАЛЕРЕИ

/**
 * Функция открытия модального окна для просмотра изображений
 */
function openModal(imageSrc, altText) {
    // Создаём элемент модального окна
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <img src="${imageSrc}" alt="${altText}" style="max-width: 100%; max-height: 80vh;">
        </div>
    `;
    document.body.appendChild(modal);
    modal.style.display = 'block';

    // Закрытие по кнопке
    const closeBtn = modal.querySelector('.close');
    closeBtn.onclick = function() {
        modal.style.display = 'none';
        document.body.removeChild(modal);
    };

    // Закрытие по клику на фон
    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.removeChild(modal);
        }
    };
}



// МОДАЛЬНОЕ ОКНО КАФЕ

// Получаем элементы DOM
const btnKafe = document.querySelector(".btn_kafe");
const closeBtnKafe = document.querySelector(".close-btn_kafe");
const modalCafe = document.querySelector(".overlei_servis");
const zatemnenie = document.querySelector(".zatemnenie");


// Открытие модального окна кафе при клике
btnKafe.addEventListener('click', (event) => {
    event.preventDefault();
    modalCafe.style.display = "block";
    zatemnenie.style.display = "block";

    // Заблокировать прокрутки
    disableScroll()

/**
 * Функция блокировки прокрутки страницы
 */
    function disableScroll() {
        scrollPosition = window.pageYOffset;
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollPosition}px`;
        document.body.style.width = '100%';
        }
})

// Закрытие модального окна при клике на кнопку закрытия
closeBtnKafe.addEventListener('click', (event) => {
    event.preventDefault();
    modalCafe.style.display = "none";
    zatemnenie.style.display = "none";
        // Разблокировка прокрутки
    enableScroll()


/**
 * Функция разблокировки прокрутки страницы
 * Возвращает страницу в исходное положение
 */
    function enableScroll() {
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollPosition);
    }
})

// Закрытие по клику на затемнённый фон
zatemnenie.addEventListener('click', (event) => {
    if (event.target === zatemnenie) {
        modalCafe.style.display = "none"
        zatemnenie.style.display = "none"
        enableScroll()
        function enableScroll() {
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            window.scrollTo(0, scrollPosition);
        }
        }
})




// SWIPER - СЛАЙДЕР НОВОСТЕЙ

// Инициализация swiper для новостей
const swiper = new Swiper('.swiper-container', {
    // Направление прокрутки
    direction: 'horizontal',
    // Зацикливание слайдов
    loop: true,

    // Пагинация (точки)
    pagination: {
        el: '.swiper-pagination',
    },

    // Кнопки навигации (стрелки)
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Скроллбар
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});



// НАВИГАЦИОННЫЕ КНОПКИ

// Переход на страницу турниров при клике
document.getElementById('btn_turnir').addEventListener('click', function() {
    window.location.href = this.getAttribute('href');
});

// Переход на страницу бронирования при клике
document.getElementById('btn_bron').addEventListener('click', function() {
    window.location.href = this.getAttribute('href');
});

