const form = document.querySelector("form");
const formInput = form.querySelector("input:first-child");
const h2 = document.querySelector("h2");
const h3 = document.querySelector("h3");

// ※ 개인정보 도용시 법적 처벌을 받을 수 있습니다. // 
localStorage.setItem("100159", "032392014004");
localStorage.setItem("100316", "032392013002");
localStorage.setItem("100816", "032392014005");
localStorage.setItem("103828", "032392014003");
localStorage.setItem("100459", "032392014006");
localStorage.setItem("100029", "032392018001");
localStorage.setItem("100129", "032392018002");
localStorage.setItem("101719", "032392018003");
localStorage.setItem("100345", "032392018004");
localStorage.setItem("100342", "032392018005");
localStorage.setItem("100519", "032392018006");
localStorage.setItem("103895", "032392019001");

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
    h2.innerText =`[로그인 (ID)는 ${show} 입니다]`;
  }
  formInput.value = "";
}
form.addEventListener("submit", handleSumbit);

document.addEventListener('contextmenu', event => event.preventDefault());