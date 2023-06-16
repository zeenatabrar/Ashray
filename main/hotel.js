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

let Name = document.getElementById("Name");
let mob = document.getElementById("Mobile");
let ArrDate = document.getElementById("startDate");
let checkDate = document.getElementById("endDate");
let NoOfPerson = document.getElementById("NoOfperson");

let bookBtn = document.getElementById("bookBtn");

bookBtn.addEventListener("click", function () {
  if (
    Name.value == "" ||
    mob.value == "" ||
    ArrDate.value == "" ||
    checkDate.value == "" ||
    NoOfPerson.value == ""
  ) {
    alert("Please fill all the details.");
  } else {
    alert("Your booking is completed.Thank You");
    console.log("press");
    fetch("https://hotels-tn92.onrender.com/bookings", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: `${place.innerText}`,
        location: `${position.innerText}`,
        image: `${hotel[0].image}`,
        personName: `${Name.value}`,
        arrival: `${ArrDate.value}`,
        checkOut: `${checkDate.value}`,
        people: `${NoOfPerson.value}`,
        price: Number(hotel[0].price),
        amount: `${Number(paise) * Number(NoOfPerson.value) * 10}`,
      }),
    });
    setTimeout(redirection, 1000);
    // console
    // location.replace("./index.html");
  }
});
function redirection() {
  location.replace("./index.html");
}
