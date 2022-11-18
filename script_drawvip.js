const form = document.querySelector("form");
const formInput = form.querySelector("input:first-child");
const h2 = document.querySelector("h2");
const h3 = document.querySelector("h3");

// ※ 개인정보 도용시 법적 처벌을 받을 수 있습니다. // 
localStorage.setItem("01032395966", "가진희");
localStorage.setItem("01032012621", "고승희");
localStorage.setItem("01042992401", "김미소");
localStorage.setItem("01085792190", "김미향");
localStorage.setItem("01051012401", "김상섭");
localStorage.setItem("01025235936", "김영배");
localStorage.setItem("01091366536", "김영회");
localStorage.setItem("01062476974", "김옥섭");
localStorage.setItem("01033324917", "김재신");
localStorage.setItem("01032671435", "김정현");
localStorage.setItem("01027131342", "김춘자");
localStorage.setItem("01099889526", "김현정");
localStorage.setItem("01041737015", "김혜정");
localStorage.setItem("01035386475", "김희훈");
localStorage.setItem("01032307325", "남동호");
localStorage.setItem("01024770296", "노미숙");
localStorage.setItem("01026163570", "박명철");
localStorage.setItem("01081419640", "박삼례");
localStorage.setItem("01079995191", "박은영");
localStorage.setItem("01087285488", "박준성");
localStorage.setItem("01088122549", "박진선");
localStorage.setItem("01048796642", "박혜정");
localStorage.setItem("01087747759", "백설경");
localStorage.setItem("01090459039", "변상미");
localStorage.setItem("01041026098", "부선주");
localStorage.setItem("01088653228", "손미선");
localStorage.setItem("01030114610", "손자영");
localStorage.setItem("01072083801", "송석규");
localStorage.setItem("01091023443", "송지현");
localStorage.setItem("01088644449", "신영민");
localStorage.setItem("01020110195", "양선주");
localStorage.setItem("01032138149", "엄경태");
localStorage.setItem("01077661603", "오은경");
localStorage.setItem("01043467674", "우정희");
localStorage.setItem("01076110638", "위선희");
localStorage.setItem("01053380719", "유경화");
localStorage.setItem("01038976873", "유미애");
localStorage.setItem("01029692198", "유병무");
localStorage.setItem("01033468141", "은명온");
localStorage.setItem("01090121871", "이수경");
localStorage.setItem("01041060573", "이여진");
localStorage.setItem("01027000714", "이영심");
localStorage.setItem("01081218417", "이영아");
localStorage.setItem("01023897869", "이영희");
localStorage.setItem("01089629496", "이은주");
localStorage.setItem("01025718892", "이정원");
localStorage.setItem("01031235347", "이현아");
localStorage.setItem("01030049728", "이현진");
localStorage.setItem("01045330811", "장은희");
localStorage.setItem("01073575137", "정상호");
localStorage.setItem("01027776797", "정정화");
localStorage.setItem("01082037403", "조성란");
localStorage.setItem("01027629758", "천정희");
localStorage.setItem("01039135702", "최선정");


function handleSumbit(event) {
    event.preventDefault(); 
    value = formInput.value;
    const show = localStorage.getItem(value);
    if(value === "") {
      alert("전화번호 입력 후 제출해 주세요😃"); 
      h2.innerText="";
    }else if(show === null) {
      h2.innerText = `["${value}" 이 핸드폰 번호에 일치하는 조합원은 찾을수가 없네요😢. 대상 조합원이 아닌 것으로 파악됩니다.👌]`;
    } else {
      h2.innerText =`[${show} 선생님은 우대금리 적용 대상자 입니다]`;
    }
    formInput.value = "";
  }
  form.addEventListener("submit", handleSumbit);
  
  document.addEventListener('contextmenu', event => event.preventDefault());
  
    const submitInput = document.querySelector(".form-input-two");
    const Input_value = form-input-one.value;
  
    function handleClick() {
      alert(`${Input_value}로 입력하셨습니다. 2022.9월 조합원 기준으로 조회 가능합니다. 조회가 되지 않을 경우 신협(☏4939)로 문의 주세요`);
    }
    
    submitInput.addEventListener("click", handleClick);