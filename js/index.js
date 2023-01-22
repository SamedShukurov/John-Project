const bottom = document.querySelector(".container-bottom");

fetch("../db/db.json")
    .then(response => response.json())
    .then((data) => {
        data.map((item) => { 
            bottom.innerHTML += `
                <div class="A">
                    <div><img src="${item.image}" alt="1" /></div>
                    <div class="card-description">
                        <div><a href="../workdetail.html">${item.header}</a></div>
                        <div>
                            <div>${item.year}</div>
                            <div>${item.title}</div>
                        </div>
                        <div>
                        ${item.description}
                        </div>
                    </div>
                </div>
                <hr />
            `;
        })
    });

