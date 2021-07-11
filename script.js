const form = document.querySelector("form");
const formInput = form.querySelector("input:first-child");
const h1 = document.querySelector("h1");

localStorage.setItem("1234", "6639");
localStorage.setItem("4567", "114789");

function handleSumbit(event) {
   event.preventDefault();
  value = formInput.value;
  if (value === "") {
    alert("사번을 입력 후 제출해 주세요😃");
    }
  const show = localStorage.getItem(value);
  if (show === null) {
    h1.innerText = "[조회되지 않네요😥 다시 한번 입력 바랍니다.👌]";
  } else {
    h1.innerText =`[조합원번호(ID)는 ${show} 입니다]`;
  }
  formInput.value = "";
}

form.addEventListener("submit", handleSumbit);