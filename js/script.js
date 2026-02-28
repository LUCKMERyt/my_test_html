// Валидация формы контактов
function validateContactForm() {
    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const subject = document.getElementById('contact-subject').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    if (!name) {
        alert('Пожалуйста, введите имя.');
        return false;
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        alert('Пожалуйста, введите корректный email.');
        return false;
    }
    if (!subject) {
        alert('Пожалуйста, введите тему.');
        return false;
    }
    if (!message) {
        alert('Пожалуйста, введите сообщение.');
        return false;
    }
    return true;
}



// Функция для окна галереи
function openModal(imageSrc, altText) {
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

    const closeBtn = modal.querySelector('.close');
    closeBtn.onclick = function() {
        modal.style.display = 'none';
        document.body.removeChild(modal);
    };

    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.removeChild(modal);
        }
    };
}


const btnKafe = document.querySelector(".btn_kafe")
const closeBtnKafe = document.querySelector(".close-btn_kafe")
const modal = document.querySelector(".overlei_servis")


btnKafe.addEventListener('click', (event) => {
    event.preventDefault()
    modal.style.display = "block"

    // Заблокировать прокрутки
    disableScroll()
    function disableScroll() {
        scrollPosition = window.pageYOffset;
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollPosition}px`;
        document.body.style.width = '100%';
        }
})

closeBtnKafe.addEventListener('click', (event) => {
    event.preventDefault()
    modal.style.display = "none"

    // Разблокировка прокрутки
    enableScroll()
    function enableScroll() {
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollPosition);
        }
})

// swiper свайпер новостей
const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
    el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
    el: '.swiper-scrollbar',
    },
  });