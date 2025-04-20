const modalContainer = document.querySelector(".modal-container");
const modal = document.querySelector(".modal");
const cardTap = document.querySelector(".card-image");

gallery.addEventListener("click", (e) => {
  if (e.target.classList.contains("card-image")) {
    const id = e.target.dataset.id;
    modalContainer.classList.add("open");
    openModal(id);
  }
});

async function openModal(id) {
  const data = await fetch(
    `https://api.unsplash.com/photos/${id}?client_id=${key}`
  );
  const res = await data.json();
  const div = document.createElement("div");
  div.setAttribute("class", "modal");
  div.innerHTML = `
  <img
          src="${res.urls.full}"
          class="modal-image"
          id="modalImage"
        />
        <h3 class="modal-title" id="modalTitle">${res.alt_description}</h3>
  `;
  modalContainer.appendChild(div);
  const close = document.querySelector(".modal-close");
  close.addEventListener("click", () => {
    modalContainer.classList.remove("open");
    div.remove();
  });
}
const like = document.querySelector(".like");
const noLike = document.querySelector(".bx-heart");
const yesLike = document.querySelector(".bxs-heart");
like.addEventListener("click", (e) => {
  if (e.target.classList.contains("bx-heart")) {
    yesLike.classList.add("open");
    noLike.classList.add("close");
  } else {
    yesLike.classList.remove("open");
    noLike.classList.remove("close");
  }
});
const fav = document.querySelector(".favorites");
const favplus = document.querySelector(".favplus");
const favminus = document.querySelector(".favminus");
fav.addEventListener("click", (e) => {
  if (e.target.classList.contains("favminus")) {
    favplus.classList.add("open");
    favminus.classList.add("close");
  } else {
    favplus.classList.remove("open");
    favminus.classList.remove("close");
  }
});
