
const data = [
  {src: './assets/img/aynu.png', alt: 'Aynu', name: 'Айну', price: '12 000₽'},
  {src: './assets/img/aynu.png', alt: 'Aynu', name: 'Афганская борзая', price: '15 000₽'},
  {src: './assets/img/aynu.png', alt: 'Барбет', name: 'Барбет', price: '50 000₽'},
  {src: './assets/img/aynu.png', alt: 'Aynu', name: 'Бассет', price: '62 000'},
  {src: './assets/img/aynu.png', alt: 'Aynu', name: 'Легавой', price: '32 000'},
  {src: './assets/img/aynu.png', alt: 'Aynu', name: 'Веттерхун', price: '120 000₽'},
  {src: './assets/img/aynu.png', alt: 'Aynu', name: 'Спаниель', price: '100 000'},
  {src: './assets/img/aynu.png', alt: 'Aynu', name: 'Древера', price: '62 000'},
  {src: './assets/img/aynu.png', alt: 'Aynu', name: 'Ирландский терьер', price: '90 000'},
  {src: './assets/img/aynu.png', alt: 'Aynu', name: 'Амереканский кокер', price: '53 000'},
  {src: './assets/img/aynu.png', alt: 'Aynu', name: 'Английский Кокер', price: '43 000'},
  {src: './assets/img/aynu.png', alt: 'Aynu', name: 'Дункер', price: '72 000'},
];

const randomSortData = data.sort(() => .5 - Math.random());

const creatItems = () => {  
  const productsTemplate = document.querySelector('#products__tepmplate');
  const fragment = document.createDocumentFragment();

  randomSortData.forEach((i) => {
    const item = productsTemplate.content.cloneNode(true);
    item.querySelector('img').src = i.src;
    item.querySelector('img').alt = i.alt;
    item.querySelector('.section__item-name').textContent = i.name;
    item.querySelector('.section__item-price').textContent = i.price;
    fragment.appendChild(item);
  });

  let sectionWrapper = document.querySelector('.section__wrapper');
  sectionWrapper.appendChild(fragment);
}

creatItems();




// <!-- <div class="section__item">
//             <div class="section__item-img">
//               <img src="./assets/img/aynu.png" alt="aynu">
//             </div>
//             <div class="section__item-info">
//               <p  class="section__item-name">Айну</p>
//               <p class="section__item-price">12 000₽</p>
//               <button class="btn">В корзину</button>
//             </div>
//           </div>
//           <div class="section__item">
//             <div class="section__item-img">
//               <img src="./assets/img/aynu.png" alt="aynu">
//             </div>
//             <div class="section__item-info">
//               <p  class="section__item-name">Айну</p>
//               <p class="section__item-price">12 000₽</p>
//               <button class="btn">В корзину</button>
//             </div>
//           </div>
//           <div class="section__item">
//             <div class="section__item-img">
//               <img src="./assets/img/aynu.png" alt="aynu">
//             </div>
//             <div class="section__item-info">
//               <p  class="section__item-name">Айну</p>
//               <p class="section__item-price">12 000₽</p>
//               <button class="btn">В корзину</button>
//             </div>
//           </div>
//           <div class="section__item">
//             <div class="section__item-img">
//               <img src="./assets/img/aynu.png" alt="aynu">
//             </div>
//             <div class="section__item-info">
//               <p  class="section__item-name">Айну</p>
//               <p class="section__item-price">12 000₽</p>
//               <button class="btn">В корзину</button>
//             </div>
//           </div>
//           <div class="section__item">
//             <div class="section__item-img">
//               <img src="./assets/img/aynu.png" alt="aynu">
//             </div>
//             <div class="section__item-info">
//               <p  class="section__item-name">Айну</p>
//               <p class="section__item-price">12 000₽</p>
//               <button class="btn">В корзину</button>
//             </div>
//           </div>
//           <div class="section__item">
//             <div class="section__item-img">
//               <img src="./assets/img/aynu.png" alt="aynu">
//             </div>
//             <div class="section__item-info">
//               <p  class="section__item-name">Айну</p>
//               <p class="section__item-price">12 000₽</p>
//               <button class="btn">В корзину</button>
//             </div>
//           </div>
//           <div class="section__item">
//             <div class="section__item-img">
//               <img src="./assets/img/aynu.png" alt="aynu">
//             </div>
//             <div class="section__item-info">
//               <p  class="section__item-name">Айну</p>
//               <p class="section__item-price">12 000₽</p>
//               <button class="btn">В корзину</button>
//             </div>
//           </div>
//           <div class="section__item">
//             <div class="section__item-img">
//               <img src="./assets/img/aynu.png" alt="aynu">
//             </div>
//             <div class="section__item-info">
//               <p  class="section__item-name">Айну</p>
//               <p class="section__item-price">12 000₽</p>
//               <button class="btn">В корзину</button>
//             </div>
//           </div>
//           <div class="section__item">
//             <div class="section__item-img">
//               <img src="./assets/img/aynu.png" alt="aynu">
//             </div>
//             <div class="section__item-info">
//               <p  class="section__item-name">Айну</p>
//               <p class="section__item-price">12 000₽</p>
//               <button class="btn">В корзину</button>
//             </div>
//           </div>
//           <div class="section__item">
//             <div class="section__item-img">
//               <img src="./assets/img/aynu.png" alt="aynu">
//             </div>
//             <div class="section__item-info">
//               <p  class="section__item-name">Айну</p>
//               <p class="section__item-price">12 000₽</p>
//               <button class="btn">В корзину</button>
//             </div>
//           </div>
//           <div class="section__item">
//             <div class="section__item-img">
//               <img src="./assets/img/aynu.png" alt="aynu">
//             </div>
//             <div class="section__item-info">
//               <p  class="section__item-name">Айну</p>
//               <p class="section__item-price">12 000₽</p>
//               <button class="btn">В корзину</button>
//             </div>
//           </div>
//           <div class="section__item">
//             <div class="section__item-img">
//               <img src="./assets/img/aynu.png" alt="aynu">
//             </div>
//             <div class="section__item-info">
//               <p  class="section__item-name">Айну</p>
//               <p class="section__item-price">12 000₽</p>
//               <button class="btn">В корзину</button>
//             </div>
//           </div> --></div>