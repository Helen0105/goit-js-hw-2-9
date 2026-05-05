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








const name = document.querySelector('.name-input');
const phone = document.querySelector('.phone-input');
const button = document.querySelector('.btn');
const contact = document.querySelector('.contact-list');

function renderContact(userName, userPhone) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span><strong>${userName}</strong>: ${userPhone}</span>
        <button class="delete-btn">Видалити</button>
    `;

    li.querySelector('.delete-btn').onclick = function() {
        li.remove();


        const contacts = JSON.parse(localStorage.getItem('contacts')) || {};
        delete contacts[userName];
        localStorage.setItem('contacts', JSON.stringify(contacts));
    };

    contact.appendChild(li); 
}

const savedContacts = JSON.parse(localStorage.getItem('contacts')) || {};
for (const n in savedContacts) {
    renderContact(n, savedContacts[n]);
}

button.onclick = function() {
    const nameVal = name.value;
    const phoneVal = phone.value;

    if (nameVal !== '' && phoneVal !== '') {
        renderContact(nameVal, phoneVal);

        const contacts = JSON.parse(localStorage.getItem('contacts')) || {};
        contacts[nameVal] = phoneVal;
        localStorage.setItem('contacts', JSON.stringify(contacts));

        name.value = '';
        phone.value = '';
    }
};

