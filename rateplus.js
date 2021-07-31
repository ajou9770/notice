const hOne = document.querySelector(".result h1:nth-child(1)");
const hTwo = document.querySelector(".resultmile");
const calInput = document.querySelector(".in");
const calForm = document.querySelector("form");
const sum = document.querySelector(".submit");
const year = document.querySelector(".in-year");
const date = document.querySelector(".in-date");
const selectOne = document.querySelector(".selectMethod");
const selectTwo = document.querySelector(".selectPp");
const modal = document.querySelector(".total_money_modal");
const modalFont = document.querySelector(".total_money_watch");
const icon = document.querySelector(".icon");

function cal(event) {
  event.preventDefault();

  let oneValue = calInput.value * 10000;
  const twoValueYear = parseInt(year.value) * 12;
  const twoValueDate = parseInt(date.value);
  const twoValue = twoValueYear + twoValueDate;
  const threeValue = selectOne.value;
  const fourValue = selectTwo.value;

  let firstValue = Math.round(oneValue / twoValue / 10) * 10;
  let secondValue = Math.round((((oneValue * 0.027) / 365) * 30) / 10) * 10;
  let thirdValue = Math.round((oneValue * 0.0045) / 2 / 10) * 10;

  if (calInput.value < 100 || calInput.value > 20000) {
    return alert("최소 대출 금액은 100만원 최대 대출 금액은 2억원 입니다~~👌");
  }

  if (twoValue < 1) {
    return alert("대출 기간을 선택해 주세요~~😜");
  }

  if (parseInt(threeValue) === 1) {
    modalFont.classList.add("none");
    firstValue = 0;
    thirdValue = Math.round((thirdValue * 2) / 10) * 10;
  }

  if (parseInt(fourValue) === 1) {
    secondValue = Math.round((((oneValue * 0.025) / 365) * 30) / 10) * 10;
  }
  if (twoValue > 60) {
    hOne.innerHTML = `대출기간은 최장 5년까지 입니다. 입력하신 대츨 기간은 ${year.value}년 ${twoValueDate}개월 입니다. 5년 이내로 입력해 주세요~~😜`;
    window.scrollTo(0, document.body.scrollHeight);
  } else {
    hOne.innerHTML = `☞ 월분할상환원금 ${firstValue.toLocaleString(
      "ko-KR"
    )} 원, 월이자는 약 ${secondValue.toLocaleString(
      "ko-KR"
    )} 원 입니다. [1회차 원리금 합계액은 약 ${(
      firstValue + secondValue
    ).toLocaleString("ko-KR")} 원 입니다.]`;
    hTwo.innerHTML = `☞ 대출관련 이용고배당으로 매년(2월) 환급되는 금액은 약 ${thirdValue.toLocaleString(
      "ko-KR"
    )} 원으로 예상 됩니다.`;
    window.scrollTo(0, document.body.scrollHeight);
  }
  modal.innerHTML = "";
  if (parseInt(threeValue) === 2) {
    modalFont.classList.remove("none");
    for (var i = 1; i < twoValue + 1; i++) {
      let number = i;
      oneValue = oneValue - firstValue;
      if (parseInt(fourValue) === 2) {
        console.log(oneValue);
        let money = firstValue + ((oneValue * 0.027) / 365) * 30;
        let cleanMoney = Math.round(money / 10) * 10;
        const div = document.createElement("div");
        const span = document.createElement("span");
        span.innerText = `${number}개월차 금액은 ${cleanMoney.toLocaleString(
          "ko-KR"
        )}입니다.`;
        div.appendChild(span);
        modal.appendChild(div);
      } else {
        console.log(oneValue);
        let money = firstValue + ((oneValue * 0.025) / 365) * 30;
        let cleanMoney = Math.round(money / 10) * 10;
        const div = document.createElement("div");
        const span = document.createElement("span");
        span.innerText = `${number}개월차 금액은 ${cleanMoney.toLocaleString(
          "ko-KR"
        )}입니다.`;
        div.appendChild(span);
        modal.appendChild(div);
      }
    }
  }
}
icon.addEventListener("click", () => {
  modal.classList.add("none");
});
modalFont.addEventListener("click", () => {
  if (modalFont.innerText === "자세히 보기") {
    modal.classList.remove("none");
    modalFont.innerText = "자세히 보기 끄기";
  } else {
    modal.classList.add("none");
    modalFont.innerText = "자세히 보기";
  }
});
calForm.addEventListener("submit", cal);