// const d1 = document.querySelector(".one")
// console.log(d1);
// if(d1){
//     console.log(d1.className)
//     d1.className = "alert alert-danger"
//     d1.classList.add("p-4")
// }



// const slider = document.querySelector(".carousel-inner")
// const btns = document.querySelector(".carousel-indicators")
// const imgs =["1.png" , "2.png" ,  "3.png" , "4.png" , "5.png" , "6.png" , "7.png"]
// imgs.forEach((img , i) =>{
//     if(i==0)
//         btns.innerHTML +=`<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${i}" class="active" aria-current="true" aria-label="Slide ${i + 1}"></button>`
        
//     else
//         btns.innerHTML += `<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${i}" 
//         aria-label="Slide ${i + 1}"></button>`

// })
// imgs.forEach((img , i) =>{
//     if(i==0)
//         slider.innerHTML +=`<div class="carousel-item active">
//             <img src="${img}" class="d-block w-100" alt="...">
//         </div>`
//     else
//         slider.innerHTML +=`<div class="carousel-item">
//             <img src="${img}" class="d-block w-100" alt="...">
//         </div>`       
// })


const  accordion = document.querySelector(".accordion")
const  item = document.querySelector(".accordion-item")
const  header = document.querySelector(".accordion-header")
const  body = document.querySelector(".accordion-body")
const btn = document.querySelector(".accordion-button")
const data =[
    {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
  }
]

data.forEach((d,i) =>{
    let  collapsed = " collapsed"
    if(i==0){
        collapsed =""
        btn.innerHTML +=`<button class="accordion-button" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}">
            ${d .id}</button>`
    }
})