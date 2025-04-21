const search = document.querySelector(".search-input");
// async function fetchData() {
//   const data = await fetch(base_url);
//   const res = await data.json();
//   getDes(res);
// }
// function getDes(card) {
//   card.forEach((value) => {
//     return value;
//   });
// }
search.addEventListener("keyup", (e) => {
  let currentValue = e.target.value.toLowerCase();
  let card = document.querySelectorAll(".card-title");
  card.forEach((value) => {
    if (value.textContent.toLowerCase().includes(currentValue)) {
      value.parentNode.style.display = "block";
    } else {
      value.parentNode.style.display = "none";
    }
  });
});
