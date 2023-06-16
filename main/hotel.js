let hotel = JSON.parse(localStorage.getItem("hotel")) || [];
console.log(hotel);
let conty = document.getElementById("conty");

let imgdiv = document.createElement("div");

let paise = hotel[0].price;

let backImage = document.createElement("img");
backImage.setAttribute("src", hotel[0].image);

let place = document.createElement("h1");
place.innerText = hotel[0].name;

let position = document.createElement("h2");
position.textContent = ` ${hotel[0].location}`;

let des = document.createElement("p");
des.textContent = hotel[0].description;

imgdiv.append(backImage, place, position, des);
conty.append(imgdiv);

let from = document.getElementById("city");
let startDate = document.getElementById("startDate");
let endDate = document.getElementById("endDate");
let NoOfPerson = document.getElementById("NoOfperson");

let bookBtn = document.getElementById("bookBtn");

bookBtn.addEventListener("click", function () {
  alert("Your booking is completed.Thank You");

 fetch("https://hotels-tn92.onrender.com/bookings", {
    method: "POST",
    body: JSON.stringify({
      name: `${place.innerText}`,
      location: `${position.innerText}`,
      image: `${hotel[0].image}`,
      city: `${from.value}`,
      start: `${startDate.value}`,
      end: `${endDate.value}`,
      persons: `${NoOfPerson.value}`,
      price: Number(hotel[0].price),
      amount: `${Number(paise) * Number(NoOfPerson.value) * 10}`,
    }),
    headers: {
      "Content-type": "application/json",
    },
  });
  console.log(body);
  location.replace("./discover.html");
});
