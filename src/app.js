const name = document.querySelector('.name-input');
const phone = document.querySelector('.phone-input');
const button = document.querySelector('.btn');
const contact = document.querySelector('.contact-list');

button.onclick = () => {
    const li = document.createElement('li');

    li.innerHTML = `
        <span><strong>${name.value}</strong>: ${phone.value}</span>
        <button class="delete-btn">Видалити</button>
    `;

    li.querySelector('.delete-btn').onclick = () => {
        li.remove();
    };

    contact.appendChild(li);

    // Очищення інпутів
    name.value = '';
    phone.value = '';
};