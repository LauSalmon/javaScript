const user = {
    'id' : 1,
    'nom': 'Salmon',
    'prenom': 'Laura',
    'age': '33 ans',
    'image' : './pomme.jpg'
  }

const p1 = document.querySelector(".nom");
p1.textContent = user.nom;


const p2 = document.querySelector(".prenom");
p2.textContent = user.prenom;


const p3 = document.querySelector(".age");
p3.textContent = user.age;

const image = document.querySelector("img");
image.src = user.image;
image.style.position = "absolute";
image.style.width = ("100px");
image.style.height = ("100px");
image.style.margin = ("10px");



const bloc = document.querySelector("div");
bloc.style.backgroundColor = "rgb(220,220,220)";
bloc.style.color = "blue";

console.log(image);