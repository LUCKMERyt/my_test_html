<<<<<<< HEAD

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

=======

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

>>>>>>> 30a3d3e0c05e8f581ccaf4873796e40073aabbf3
