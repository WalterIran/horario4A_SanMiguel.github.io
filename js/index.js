let cls = document.getElementsByClassName('clase');

for (let i = 0; i < cls.length; i++) {
    cls[i].addEventListener('click', function() {
        let link = cls[i].getElementsByTagName('a')[0];
        let nomCl = cls[i].getElementsByClassName('nomClass')[0].innerHTML;

        let res = confirm('¿Desea ingresar a la clase de ' + nomCl + '?');

        if (res === true) {
            window.open(link);
        }

    })

    cls[i].addEventListener('mouseover', function() {
        cls[i].style.backgroundColor =
            'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')'
    })

    cls[i].addEventListener('mouseout', function() {
        cls[i].style.backgroundColor = 'transparent'
    })
}