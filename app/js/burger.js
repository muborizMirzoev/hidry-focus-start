const headerCatalog = document.querySelector('.header__catalog');
const topBlockWrapper = document.querySelector('.top-block-wrapper');
const mainCatalogOpen = document.querySelector('.main__catalog-open ');
let headerCatalogOpen = false;
headerCatalog.addEventListener('click', () => {
    if(!headerCatalogOpen) {
      headerCatalog.classList.add('open');
      headerCatalogOpen = true;
      topBlockWrapper.style.display = 'none';
      mainCatalogOpen.style.display = 'flex';
    } else {
      headerCatalog.classList.remove('open');
      headerCatalogOpen = false;
      mainCatalogOpen.style.display = 'none';
      topBlockWrapper.style.display = 'block';
    }
});

const navBurger = document.querySelector('.nav__burger');
let menuOpen = false;
navBurger.addEventListener('click', () => {
    if(!menuOpen) {
      navBurger.classList.add('open');
        menuOpen = true;
    } else {
      navBurger.classList.remove('open');
        menuOpen = false;
    }
});

// // filter
// const filter = document.querySelector('.filter');
// const filterHidden = document.querySelector('.filter__hidden');

// filterHidden.addEventListener('click', () => {

// });