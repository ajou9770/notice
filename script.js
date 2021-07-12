const form = document.querySelector("form");
const formInput = form.querySelector("input:first-child");
const h2 = document.querySelector("h2");
const h3 = document.querySelector("h3");
const clock = document.querySelector("h3#clock");

// ※ 개인정보 도용시 법적 처벌을 받을 수 있습니다. // 
localStorage.setItem("1998001", "4795484");
localStorage.setItem("2003001", "4796584");
localStorage.setItem("2007003", "4798180");
localStorage.setItem("2008001", "13915701");
localStorage.setItem("2000003", "4795888");
localStorage.setItem("105116", "4796917");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");
  
  clock.innerText = `⏰ 지금은 ${hours}시 ${minutes}분 ${seconds}초 입니다`;
}

getClock();

setInterval(getClock, 1000);

function handleSumbit(event) {
  event.preventDefault(); 
  value = formInput.value;
  const show = localStorage.getItem(value);
  if(value === "") {
    alert("사번을 입력 후 제출해 주세요😃"); 
    h2.innerText="";
  }else if(show === null) {
    h2.innerText = "[조회되지 않네요😥 신협으로 문의 바랍니다.👌]";
  } else {
    h2.innerText =`[조합원번호(ID)는 ${show} 입니다]`;
  }
  formInput.value = "";
}
form.addEventListener("submit", handleSumbit);