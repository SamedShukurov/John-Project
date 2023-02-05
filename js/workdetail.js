const work = document.querySelector(".container");

fetch("../db/work.json")
  .then((response) => response.json())
  .then((data) => {
    data.map((item) => {
      work.innerHTML += `
        <div class="container-header">${item.header}</div>
        <div class="container-center">
          <div class="container-time">${item.year}</div>
          <div class="container-title">${item.title}</div>
        </div>
        <div class="container-decription">
          ${item.description}
        </div>
        <img src="${item.image}">
        `;
    });
  });
