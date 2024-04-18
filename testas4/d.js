function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.addEventListener('load', _ => {

    function generuotiSkaicius() {
        const tagai = document.querySelectorAll('h2');
        tagai.forEach(function(h2) {
            const skaicius = Math.floor(Math.random(1, 6));
            h2.innerText = skaicius;
            h2.innerHTML = innerText;
        });
    }




    
});