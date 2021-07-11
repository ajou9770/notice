const form = document.querySelector("form");
const formInput = form.querySelector("input:first-child");
const h1 = document.querySelector("h1");

localStorage.setItem("1234", "6639");
localStorage.setItem("4567", "114789");

function handleSumbit(event) {
  event.preventDefault();
  value = formInput.value;
  const show = localStorage.getItem(value);
  if (show === null) {
    h1.innerText = "없슴";
  } else {
    h1.innerText = show;
  }
  formInput.value = "";
}

form.addEventListener("submit", handleSumbit);