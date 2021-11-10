const menu = document.querySelector('#menu-bar');
const navbar = document.querySelector('.navbar');

/* MENU - Toggle Type Burger to Type Close */
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    /* Al usar el scroll aparece la flecha de "scroll-top" */
    if (window.scrollY > 60) {
        document.querySelector('#scroll-top').classList.add('active');
    } else {
        document.querySelector('#scroll-top').classList.remove('active')
    }
}

const loader = () => {
    document.querySelector('.loader-container').classList.add('fade-out');
}

// const fadeOut = () => {
//     setInterval(loader, 3000);
// }

// window.onload = fadeOut();