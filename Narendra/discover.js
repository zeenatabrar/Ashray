let cont = document.getElementById("container");
let data = [];
let ratingBtn = document.getElementById("ratingSelect");
let priceBtn = document.getElementById("priceSelect");
let btnBox = document.getElementById("btnbox");
fetching(1);
let global = [];
let fet = fetch("https://hotels-tn92.onrender.com/hotels");
fet
  .then(function (Res) {
    return Res.json();
  })
  .then(function (dat) {
    global = dat;
  });
function fetching(pageNum) {
  let info = fetch(
    `https://hotels-tn92.onrender.com/hotels?_limit=6&_page=${pageNum}`
  );
  info
    .then(function (res) {
      let total = res.headers.get("X-Total-Count");
      let totalBtn = Math.ceil(total / 6);
      // console.log(total);
      btnBox.innerHTML = null;
      for (let i = 1; i <= totalBtn; i++) {
        btnBox.append(createButton(i, i));
      }
      return res.json();
    })
    .then(function (datas) {
      // console.log(data);
      data = datas;
      //   console.log(data);
      display(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function display(data) {
  cont.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    let anchor = document.createElement("a");
    anchor.setAttribute("href", "./hotel.html");
    anchor.addEventListener("click", function () {
      let hotel = [];
      hotel.push(data[i]);
      localStorage.setItem("hotel", JSON.stringify(hotel));
    });

    let card = document.createElement("div");

    let image = document.createElement("img");
    image.setAttribute("src", data[i].image);

    let name = document.createElement("h2");

    name.innerText = data[i].name;

    let location = document.createElement("h4");
    location.innerText = data[i].location;

    let box = document.createElement("div");

    let rating = document.createElement("h5");
    rating.innerText = `⭐ ${Number(data[i].rating)}`;

    let price = document.createElement("h5");
    price.innerText = `₹ ${Number(data[i].price) * 10} / Person`;

    box.append(rating, price);
    card.append(image, name, location, box);
    anchor.append(card);
    cont.append(anchor);
  }
}
let upBtn = document.getElementById("increase");
upBtn.addEventListener("click", function () {
  ratingBtn.value = "";
  priceBtn.value = "";
  data.sort(function (a, b) {
    return a.price - b.price;
  });
  display(data);
});
let downBtn = document.getElementById("decrease");
downBtn.addEventListener("click", function () {
  ratingBtn.value = "";
  priceBtn.value = "";
  data.sort(function (a, b) {
    return b.price - a.price;
  });
  display(data);
});
let searchBar = document.getElementById("searchBar");

searchBar.addEventListener("input", function () {
  console.log(global);
  if (searchBar.value === "") {
    display(data);
  } else {
    let searched = global.filter(function (item) {
      if (
        item.name.toUpperCase().includes(searchBar.value.toUpperCase()) ||
        item.location.toUpperCase().includes(searchBar.value.toUpperCase())
      ) {
        return true;
      } else {
        return false;
      }
    });
    display(searched);
  }
});

priceBtn.addEventListener("change", function () {
  ratingBtn.value = "";
  if (priceBtn.value == "") {
    display(data);
  } else {
    let priceData = data.filter(function (ele) {
      if (Number(ele.price * 10) < Number(priceBtn.value)) {
        return true;
      } else {
        return false;
      }
    });
    display(priceData);
  }
});

ratingBtn.addEventListener("change", function () {
  priceBtn.value = "";
  if (ratingBtn.value == "") {
    display(data);
  } else if (ratingBtn.value == 3) {
    let rate = data.filter(function (element) {
      if (Number(element.rating / 20) < Number(ratingBtn.value)) {
        return true;
      } else {
        return false;
      }
    });
    // console.log(rate);
    display(rate);
  } else if (ratingBtn.value > 3) {
    let rate = data.filter(function (element) {
      if (
        Number(element.rating / 20) <= Number(ratingBtn.value) &&
        Number(element.rating / 20) > 3
      ) {
        return true;
      } else {
        return false;
      }
    });
    // console.log(rate);
    display(rate);
  }
});

function createButton(a, b) {
  let btn = document.createElement("button");
  btn.setAttribute("data-id", b);
  btn.innerText = a;
  btn.addEventListener("click", function (e) {
    fetching(e.target.dataset.id);
  });
  return btn;
}
