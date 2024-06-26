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
    let updateId = 0;

    const listHtml = document.querySelector('.--list');
    const closeButtons = document.querySelectorAll('.--close');
    const createButton = document.querySelector('.--create');

    const createModal = document.querySelector('.modal--create');
    const storeButton = createModal.querySelector('.--submit');
    const deleteModal = document.querySelector('.modal--delete');
    const destroyButton = deleteModal.querySelector('.--submit');
    const editModal = document.querySelector('.modal--edit2');
    const updateButton = editModal.querySelector('.--submit');

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
        const data = getDataFromForm(createModal);
        storeData(data);
        hideModal(createModal);
        showList();
    }

    const destroy = _ => {
        destroyData(destroyId);
        hideModal(deleteModal);
        showList();
    }

    const update = _ => {
        const data = getDataFromForm(editModal);
        updateData(updateId, data);
        hideModal(editModal);
        showList();
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

    const registerEdit = _ => {
        document.querySelectorAll('.--edit2').forEach(b => {
            b.addEventListener('click', _ => {
                showModal(editModal);
                prepareEditModal(parseInt(b.value));
                updateId = parseInt(b.value);
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

    const updateData = (id, data) => {
        const updateData = read().map(c => c.id == id ? {...data, id} : c);
        write(updateData);
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
        registerEdit();
    }

    const prepareDeleteModal = id => {
        const title = read().find(c => c.id == id).clientSurname;
        deleteModal.querySelector('.clientName--clientSurname').innerText = title;
    }

    const prepareEditModal = id => {
        const product = read().find(c => c.id == id);
        editModal.querySelectorAll('[name]').forEach(i => {
            i.value = product[i.getAttribute('name')];
        });
    }

    const devButton = document.querySelector('.seed');
    devButton.addEventListener('click', _ => {
        seed();
        showList();
    });

    closeButtons.forEach(b => {
        b.addEventListener('click', _ => {
            hideModal(b.closest('.--modal'));
        });
    });

    createButton.addEventListener('click', _ => showModal(createModal));

    storeButton.addEventListener('click', _ => store());

    destroyButton.addEventListener('click', _ => destroy());

    updateButton.addEventListener('click', _ => update());


    setTimeout(_ => showList(), 2000);

    const seedData = [
        {id: 1, clientName: 'Klevas', clientSurname: 'Auksaspalvis', clientMoney: '1425 '},
        {id: 2, clientName: 'Raudė', clientSurname: 'Ežeraitė', clientMoney: '703 '},
        {id: 3, clientName: 'Ruduo', clientSurname: 'Gelsvalapis', clientMoney: '15 '},
        {id: 4, clientName: 'Zylė', clientSurname: 'Gražiasparnė', clientMoney: '489 '},
        {id: 5, clientName: 'Braškė', clientSurname: 'Obelaitė', clientMoney: '2541 '},
        {id: 6, clientName: 'Bazilikas', clientSurname: 'Ožekšnis', clientMoney: '57 '},
        {id: 7, clientName: 'Smidras', clientSurname: 'Paprikėnas', clientMoney: '984 '},
        {id: 8, clientName: 'Magnolija', clientSurname: 'Skardžiabalsienė', clientMoney: '8652 '},
        {id: 9, clientName: 'Kriaušė', clientSurname: 'Voveraitė', clientMoney: '698 '},
        {id: 10, clientName: 'Vilkas', clientSurname: 'Žuvėdrinis', clientMoney: '352 '},
    ];

    
    const seed = _ => {
        write(seedData);
        localStorage.setItem(LAST_ID_LS, 10);
    }










});