const menuOpenBtn = document.getElementById("menu-open");
const menuCloseBtn = document.getElementById('menu-close');
const navigationTab = document.getElementById('navigation');

menuOpenBtn.addEventListener('click', () => {
    navigationTab.style.transform = 'scale(1)';
});

menuCloseBtn.addEventListener('click', () => {
    navigationTab.style.transform = 'scale(0)';
});