const card = document.querySelector(".card");
let num = 0;

async function getdata() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  console.log(data);

  data.forEach((element) => {
    console.log(element);
    const creatediv = document.createElement("div");
    creatediv.classList.add("card-detail");

    const creatimage = document.createElement("img");
    creatimage.setAttribute("src", element.image);

    const createPrice = document.createElement("p");
    const createpricetitel = document.createTextNode(element.price);
    createPrice.append(createpricetitel);

    const createtitel = document.createElement("p");
    const createtiteldetail = document.createTextNode(element.title);
    createtitel.append(createtiteldetail);

    const button = document.createElement("button");
    button.textContent = "Add to card";

    creatediv.append(creatimage);
    creatediv.append(createPrice);
    creatediv.append(createtitel);
    creatediv.append(button);

    card.append(creatediv);

    button.addEventListener("click", () => {
      addtocard(element.title, element.image);
      num++;
    });
    const cardicon = document.getElementById("cardiocn");

    function addtocard(data, image) {
      const cardimage = document.createElement("img");
      cardimage.setAttribute("src", image);
      cardicon.append(cardimage);

      console.log(data);
      console.log(image);

      document.getElementById("num").innerHTML = num + 1;

      // const creatediv2 =  document.createElement('div')
      // console.log(creatediv2);
    }
    const cardclick = document.getElementById("cardclick");
    cardclick.addEventListener("click", () => {
      console.log("click");



      
    //   cardicon.style.display = "none";
      
    });
  });
}
getdata();
