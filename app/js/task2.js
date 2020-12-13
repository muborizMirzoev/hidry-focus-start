// <!-- <div class="section__item">
// <div class="section__item-img">
//   <img src="./assets/img/aynu.png" alt="aynu">
// </div>
// <div class="section__item-info">
//   <p  class="section__item-name">Айну</p>
//   <p class="section__item-price">12 000₽</p>
//   <button class="btn">В корзину</button>
// </div>
// </div>
// <div class="section__item">
// <div class="section__item-img">
//   <img src="./assets/img/aynu.png" alt="aynu">
// </div>
// <div class="section__item-info">
//   <p  class="section__item-name">Айну</p>
//   <p class="section__item-price">12 000₽</p>
//   <button class="btn">В корзину</button>
// </div>
// </div>
const data = [
  {img: './assets/img/aynu.png', name: 'Айну', price: '12 000'},
  {img: './assets/img/aynu.png', name: '5', price: '13 000'},
  {img: './assets/img/aynu.png', name: '4', price: '14 000'},
  {img: './assets/img/aynu.png', name: '3', price: '15 000'},
  {img: './assets/img/aynu.png', name: '2', price: '16 000'}
];

const randomSortData = data.sort(() =>  {
  return Math.random() - 0,5;
});
const template = document.querySelector('.section__item');
const fragment = document.createDocumentFragment();

randomSortData.forEach((i) => {
  const item = template.content.cloneNode(true);
  console.log(i);
  item.document.querySelector()
})