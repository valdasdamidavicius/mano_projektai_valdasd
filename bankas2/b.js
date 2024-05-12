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

    const LAST_ID_LS = 'clientsLastSavedId';
    const CLIENTS_LS = 'clientsList'
    let destroyId = 0;

    const listHtml = document.querySelector('.--list');
    const closeButtons = document.querySelectorAll('.--close');
    const createButton = document.querySelector('.--create');

    const createModal = document.querySelector('.modal--create');
    const storeButton = createModal.querySelector('.--submit');
    const deleteModal = document.querySelector('.modal--delete');
    const destroyButton = deleteModal.querySelector('.--submit');

    const getId = _ => {
        const id = localStorage.getItem(LAST_ID_LS);
        if (null === id) {
            localStorage.setItem(LAST_ID_LS, 1);
            return 1;
        }
        localStorage.setItem(LAST_ID_LS, parseInt(id) + 1);
        return parseInt(id) + 1;
    }

    const showModal = modal => modal.style.display = 'flex';

    const hideModal = modal => {
        modal.querySelectorAll('[name]').forEach(i => {
            i.value = '';
        });
        modal.style.display = 'none';
    }

    const getDataFromForm = form => {
        const data = {};
        form.querySelectorAll('[name]').forEach(i => {
            data[i.getAttribute('name')] = i.value;
        });
        return data;
    }

    const store = _ => {
        const data = getDataFromForm(createModal);  // CRUD
        storeData(data);  // LS
        hideModal(createModal);  // DOM
        showList();  // DOM
    }

    const destroy = _ => {
        destroyData(destroyId);  // LS
        hideModal(deleteModal);  // DOM
        showList();  //DOM
    }

    const registerDelete = _ => {
        document.querySelectorAll('.--delete').forEach(b => {
            b.addEventListener('click', _ => {
                showModal(deleteModal);
                prepareDeleteModal(parseInt(b.value));
                destroyId = parseInt(b.value);
            });
        });
    }

    const destroyData = id => {
        const data = read();
        const deleteData = data.filter(d => d.id !== id);
        write(deleteData);
    }

    const write = data => {
        localStorage.setItem(CLIENTS_LS, JSON.stringify(data));
    }
    
    const read = _ => {
        const data = localStorage.getItem(CLIENTS_LS);
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

    const showList = _ => {
        let clientsHtml = '';
        read().forEach(c => {
            let temp = html;
            temp = temp.replaceAll('{{id}}', c.id);
            temp = temp.replaceAll('{{client}}', c.clientName);
            temp = temp.replaceAll('{{client2}}', c.clientSurname);
            temp = temp.replaceAll('{{money}}', '0');
            clientsHtml += temp;
        });
        listHtml.innerHTML = clientsHtml;
        registerDelete();
        // registerEdit();
    }

    const prepareDeleteModal = id => {
        const title = read().find(c => c.id == id).clientSurname;
        deleteModal.querySelector('.clientName--clientSurname').innerText = title;
    }

    closeButtons.forEach(b => {
        b.addEventListener('click', _ => {
            hideModal(b.closest('.--modal'));
        });
    });

    createButton.addEventListener('click', _ => showModal(createModal));

    storeButton.addEventListener('click', _ => store());

    destroyButton.addEventListener('click', _ => destroy());

    setTimeout(_ => showList(), 2000);














});