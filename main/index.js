const baseServerURL="https://hotels-tn92.onrender.com/hotels"
let mainsection=document.getElementById("hotels")

fetchdata(baseServerURL)
function fetchdata(z){
    fetch(z)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        console.log(data)
        display(data)
    })
    .catch(function(err){
        console.log(err)
    })
}

function display(data){
    mainsection.innerHTML=""
    let cardlist=document.createElement("div")
    cardlist.className="cardlist"

    mainsection.append(cardlist)

    data.forEach((item)=>{
        let card=createcard(item)
        cardlist.append(card)
    })
}
function createcard(item){
    let card=document.createElement("div")
    card.className="card"
    card.setAttribute("data-id",item.id)

    let imgdiv=document.createElement("div")
    imgdiv.className = "card-img"

  let img = document.createElement("img")
  img.setAttribute("src", item.image)
  img.setAttribute("alt", "hotels")

  imgdiv.append(img)

  let cardbody = document.createElement("div")
  cardbody.className = "card-body"

//   let h4 = document.createElement("h4")
//   h4.className = "card-title"
//   h4.innerText = item.description;

  let p2 = document.createElement("p")
  p2.className = "card-category"
  p2.innerText = item.location

  let p3 = document.createElement("p")
  p3.className = "card-price"
  p3.innerText = item.price;

  
  let p4 = document.createElement("p")
  p4.className = "card-price"
  p4.innerText = item.rating;

  cardbody.append(p2,p3,p4)
  card.append(imgdiv,cardbody)
  return card;
}


// login & logout
var sc = localStorage.getItem("code");
if (sc == "secret") {
} else {
  window.location.href = "login.html";
}