const form = document.querySelector("form");
const formInput = form.querySelector("input:first-child");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const clock = document.querySelector("h2#clock");

// ※ 개인정보 도용시 법적 처벌을 받을 수 있습니다. // 
localStorage.setItem("1998001", "4795484");
localStorage.setItem("2003001", "4796584");
localStorage.setItem("2007003", "4798180");
localStorage.setItem("2008001", "13915701");
localStorage.setItem("2000003", "4795888");
localStorage.setItem("105116", "4796917");

function getClock() {
  const date = new Date();
  clock.innerText = `▣ 현재 시각  ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
getClock();
setInterval(getClock, 1000);

function handleSumbit(event) {
  event.preventDefault(); 
  value = formInput.value;
  const show = localStorage.getItem(value);
  if(value === "") {
    alert("사번을 입력 후 제출해 주세요😃"); 
    h1.innerText="";
  }else if(show === null) {
    h1.innerText = "[조회되지 않네요😥 신협으로 문의 바랍니다.👌]";
  } else {
    h1.innerText =`[조합원번호(ID)는 ${show} 입니다]`;
  }
  formInput.value = "";
}
form.addEventListener("submit", handleSumbit);
