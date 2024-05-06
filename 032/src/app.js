import axios from 'axios';
import { error } from 'laravel-mix/src/Log';



console.log('app.js is running');

window.addEventListener('load', _ => {

    const name = document.querySelector('[name=name]');
    const surname = document.querySelector('[name=surname]');
    const button1 = document.querySelector('#params');

    button1.addEventListener('click', _ => {
        const data = {
            name: name.value,
            surname: surname.value
        }

        axios.get(`http://localhost/params/${data.name}/${data.surname}`)
        .then(res => {
            console.log(res.data);
        })
        .catch(error => {
            console.log(error);
        })
    });

});