const blog = document.querySelector(".container");

fetch("../db/blog.json")
  .then( response => response.json())
  .then((data) => {
    data.map((item)=>{
      blog.innerHTML +=`
      <div class="UI">
               <div>${item.header}</div>
                 <div>
                   <div>${item.date_time}</div>
                   <hr />
                   <div>${item.title}</div>
                 </div>
                 <div>
                 ${item.description}
                </div>
              </div>
               <hr>
      `;
    })
  });
