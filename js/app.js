const foodImgEl = document.querySelector('.food-img');
const buttonEl = document.querySelector('.btn');
const foodUrl = 'https://foodish-api.herokuapp.com/api';

async function randomFood() {
  const res = await fetch(foodUrl);
  const data = await res.json();
  foodImgEl.setAttribute('src', data.image);
}

buttonEl.addEventListener('click', () => {
  randomFood();
});
