
document.addEventListener("DOMContentLoaded", () => {
  const productContainers =
    document.querySelectorAll(".product-container");
  const nxtBtns = document.querySelectorAll(".nxt-btn");
  const preBtns = document.querySelectorAll(".pre-btn");

  productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener("click", () => {
      item.scrollLeft += containerWidth;
    });

    preBtns[i].addEventListener("click", () => {
      item.scrollLeft -= containerWidth;
    });
  });

  fetch("https://hotels-tn92.onrender.com/hotels?_sort=price&_order=asc")
    .then((response) => response.json())
    .then((data) => {
      const productContainer =
        document.getElementById("product-container");

      // Create slider items
      data.forEach((hotel) => {
        var card = document.createElement("div");
        card.className = "card";

        var image = document.createElement("img");
        image.src = hotel.image;
        image.alt = "Hotel Image";
        card.appendChild(image);

        var details = document.createElement("div");
        details.className = "card-details";
        card.appendChild(details);

        var h2 = document.createElement("h2");
        h2.textContent = hotel.name;
        details.appendChild(h2);

        var p1 = document.createElement("p");
        p1.textContent = hotel.location;
        details.appendChild(p1);

        // var p2 = document.createElement("p");
        // p2.textContent = hotel.description;
        // details.appendChild(p2);

        var p3 = document.createElement("p");
        p3.className = "price";
        p3.textContent = "Price: ₹ " + hotel.price*10;
        details.appendChild(p3);

        var p4 = document.createElement("p");
        p4.className = "rating";
        p4.textContent = "Rating: " + hotel.rating;
        details.appendChild(p4);

        productContainer.appendChild(card);
      });
    })
    .catch((error) => {
      console.error("Error fetching hotel data:", error);
    });
});



// login & logout
var sc = localStorage.getItem("code");
if (sc == "secret") {
} else {
  window.location.href = "login.html";
}