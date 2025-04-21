const key = "s6KSKKPYFtvENjKp9mJOa6he9yptGJHDb2_UybFqAc4";
const base_url = `https://api.unsplash.com/photos/?client_id=${key}`;
const gallery = document.querySelector(".gallery-grid");
window.addEventListener("DOMContentLoaded", () => {
  fetchData();
});

async function fetchData() {
  const data = await fetch(base_url);
  const res = await data.json();
  getCards(res);
}
function getCards(cards) {
  gallery.innerHTML = "";
  cards.forEach((card) => {
    displayCard(card, card.id);
    console.log(card);
  });
}
function displayCard(data, id) {
  const div = document.createElement("div");
  div.setAttribute("class", "card");
  div.innerHTML = `
            <img src="${data.urls.small}" alt="Изображение 1" class="card-image" data-id="${id}" />
            <h3 class="card-title">${data.alt_description}</h3>
  `;
  gallery.appendChild(div);
}
