let login = document.querySelector('.button-user');
let dropdownMenu = document.querySelector('#dropdown-menu');

login.addEventListener('click',() => {
   dropdownMenu.classList.toggle("dropdown-menu-visible");
})