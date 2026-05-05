// const name = document.querySelector('.name-input');
// const phone = document.querySelector('.phone-input');
// const button = document.querySelector('.btn');
// const contact = document.querySelector('.contact-list');

// button.onclick = () => {
//     const li = document.createElement('li');
//     li.innerHTML = `
//         <span><strong>${name.value}</strong>: ${phone.value}</span>
//         <button class="delete-btn">Видалити</button>
//     `;

//     li.querySelector('.delete-btn').onclick = () => {
//         li.remove();
//     };

//     contact.appendChild(li);


//     name.value = '';
//     phone.value = '';
// };








const nameInput = document.querySelector('.name-input');
const phoneInput = document.querySelector('.phone-input');
const button = document.querySelector('.btn');
const contactList = document.querySelector('.contact-list');

const renderContact = (name, phone) => {
    const li = document.createElement('li');
    li.innerHTML = `
        <span><strong>${name}</strong>: ${phone}</span>
        <button class="delete-btn">Видалити</button>
    `;

    li.querySelector('.delete-btn').onclick = () => {
        li.remove();
        deleteContact(name);
    };

    contactList.appendChild(li);
};


const savedContacts = JSON.parse(localStorage.getItem('contacts')) || {};
Object.keys(savedContacts).forEach(name => {
    renderContact(name, savedContacts[name]);
});

button.onclick = () => {
    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();

    if (name && phone) {

        renderContact(name, phone);


        const contacts = JSON.parse(localStorage.getItem('contacts')) || {};
        contacts[name] = phone;
        localStorage.setItem('contacts', JSON.stringify(contacts));

        nameInput.value = '';
        phoneInput.value = '';
    }
};

