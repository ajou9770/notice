const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); // document.querySelector("#toDoForm input")같음.
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = []; // 여기가 항상 비어 있을경우, 덮어쓰기로 전에 입력한 것은 지워짐. 

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //JSON.stringify => 변수를 문자로 변경 함. 
}

function deleteToDo(event) {
  const li = event.target.parentElement; // parentElement 는 이벤트 요소의 부모 요소임.
  console.log(li.id);
  li.remove(); // 요소의 부모  element를 삭제함. 
}

function paintToDo(newTodo) {
  const li = document.createElement("li"); // li   element생성
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
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
  const newTodoObj = {
    text:newTodo,
    id:Date.now(),
  };
  toDos.push(newTodoObj); //toDos array에 push(보내기)
  paintToDo(newTodoObj);  
  saveToDos(newTodo);
}



toDoForm.addEventListener("submit", handleToDoSubmit);

/*function sayHello(item) {
  console.log("hello", item);
}*/

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo); //이하 불요 => console.log("this is the trun of",item)); // function sayHello(item) {
    // console.log("Hello",item);
}

function sexyFilte() {
  
}

