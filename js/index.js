function changeImage(fileName){
    let img = document.querySelector("#plane-img");
    img.setAttribute("src", fileName);
}

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const text = document.getElementById("nagłówek");

button1.addEventListener("click", () => {
  text.textContent = button1.dataset.text;
});

button2.addEventListener("click", () => {
  text.textContent = button2.dataset.text;
});

button3.addEventListener("click", () => {
  text.textContent = button3.dataset.text;
});

button4.addEventListener("click", () => {
  text.textContent = button3.dataset.text;
});