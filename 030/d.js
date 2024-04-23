console.log('products');

const LAST_ID_LS = 'productsLastSavedId';
const PRODUCTS_LS = 'productsList';

const getId = _ => {
    const id = localStorage.getItem(LAST_ID_LS);
    if (null === id) {
        localStorage.setItem(LAST_ID_LS, 1);
        return 1;
    }
    localStorage.setItem(LAST_ID_LS, parseInt(id) + 1);
    return parseInt(id) + 1;
}

const write = data => {
    localStorage.setItem(PRODUCTS_LS, JSON.stringify(data));
}

const read = _ => {
    const data = localStorage.getItem(PRODUCTS_LS);
    if (null === data) {
        return [];
    }
    return JSON.parse(data);
}

const storeData = data => {
    const storeData = read();
    data.id = getId();
    storeData.push(data);
    write(storeData);
}

const showModal = modal => modal.style.display = 'flex';
const hideModal = modal => modal.style.display = 'none';

const getDataFromForm = form => {
    const data = {};
    form.querySelectorAll('[name]').forEach(i => {
        data[i.getAttribute('name')] = i.value;
    });
    return data;
}

const store = _ => {
    data = getDataFromForm(createModal);
    storeData(data);
    hideModal(createModal);
}



window.addEventListener('load', _ => {

    const closeButtons = document.querySelectorAll('.--close');
    const createModal = document.querySelector('.modal--create');
    const storeButton = createModal.querySelector('.--submit');
    const createButton = document.querySelector('.--create');

    closeButtons.forEach(b => {
        b.addEventListener('click', _ => {
            hideModal(b.closest('.--modal'));
        })
    })

    createButton.addEventListener('click', _ => showModal(createModal));

    storeButton.addEventListener('click', _ => store());



});