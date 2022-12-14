const menuItens = document.querySelectorAll('.navegacao a');

menuItens.forEach(item => {
    item.addEventListener('click', scrollClick);
});

function scrollHref(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

function scrollClick(event) {
    event.preventDefault();
    const to = scrollHref(event.target) - 25;

    scrollPosition(to);
}

function scrollPosition(to) {
    window.scroll({
        top: to,
        behavior:"smooth",
    });
}
