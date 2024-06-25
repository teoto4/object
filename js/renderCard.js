import {cards} from './card.js';


const cardContainer = document.querySelector(".container");


for (const card of cards){
    const cardTemplate = `<div class="card">
    <img src ="${card.img}"/>
    <h2 class = "title">${card.title}</h2>
    <p class = "model">${card.model}</p>
    <p class = "price">${card.price} <span>грн</span></p>
    <button disabled id=js-btn>Купити</button>
    </div>`
    cardContainer.insertAdjacentHTML("beforeend", cardTemplate)
    changeDisabledOption(card.isAvaiable);
}


const btns = document.querySelectorAll("#js-btn");


function changeDisabledOption (value){
    for (const btn of btns){
        if(value){
            btn.disabled = false;
        } else{
            btn.disabled = true;
        }
    }



    
}