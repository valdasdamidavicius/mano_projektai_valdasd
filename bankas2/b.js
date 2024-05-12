const html = `
<div class="product">
    <div>
        <div class="id">ID:{{id}}</div>
        <div class="client">{{client}}</div>
        <div class="clientSurname">{{client2}}</div>
        <div class="money">{{money}} Eur</div>
    </div>
    <div>
        <button type="button" value="{{id}}" class="green --plus">Pridėti lėšų</button>
        <button type="button" value="{{id}}" class="yellow --minus">Nuskaičiuoti lėšas</button>
        <button type="button" value="{{id}}" class="red --delete">Ištrinti</button>
    </div>
</div>
`;



window.addEventListener('load', _ => {


    const listHtml = document.querySelector('.--list');
    const closeButtons = document.querySelectorAll('.--close');
    const createButton = document.querySelector('.--create');

    const createModal = document.querySelector('.modal--create');
    const storeButton = createModal.querySelector('.--submit');

    const showModal = modal => modal.style.display = 'flex';

    const hideModal = modal => {
        modal.querySelectorAll('[name]').forEach(i => {
            i.value = '';
        });
        modal.style.display = 'none';
    }

    closeButtons.forEach(b => {
        b.addEventListener('click', _ => {
            hideModal(b.closest('.--modal'));
        });
    });

    createButton.addEventListener('click', _ => showModal(createModal));

    setTimeout(_ => showList(), 2000);














});