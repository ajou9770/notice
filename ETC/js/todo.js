const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); // document.querySelector("#toDoForm input")같음.
const toDoList = document.getElementById("todo-list");

function deleteToDo(event) {
  console.log(event.target.parentElement); // parentElement 는 이벤트 요소의 부모 요소임.
}

function paintToDo(newTodo) {
  console.log("I will paint", newTodo);
  const li = document.createElement("li"); // li   element생성
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "   ✂";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span); // li 는 span 을 가진다 ( span  는 li에 속한다)
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  //console.log(toDoInput.value); // input    값을 출력해 보기 (정상 작동여부 확인. )
  const newTodo = toDoInput.value; // 입력된 값을 저장하기 위해 새로운 변수 newTodo 생성
  toDoInput.value = ""; //  => event 발생시 input   값을 비워두기 newTodo 의 값에는 영향이 없음.
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
