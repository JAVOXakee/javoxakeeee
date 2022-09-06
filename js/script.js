'use strict'

const seriesDB = {
  series: [
    'SHASHLIK',
    ' MANTI ',
    'SOMSA',
  ],
}

const somsa = document.querySelectorAll(".promo__adv img"),
  shashlik = document.querySelector(".promo__genre"),
  manti = document.querySelector(".promo__bg"),
  lavash = document.querySelector(".promo__interactive-list");

  somsa.forEach((item) => {
    item.remove()
  })
  shashlik.innerHTML ="SOMSA";
  shashlik.style.color ="black";
  manti.style.backgroundImage = `url("img/1.jpg")`;

  lavash.innerHTML= "";

  seriesDB.series.forEach((item,  number) =>{
    lavash.innerHTML += `
    <li class="promo__interactive-item">
          ${number + 1}. ${item}  
      <div class="delete"></div>
    </li>
    `
  })