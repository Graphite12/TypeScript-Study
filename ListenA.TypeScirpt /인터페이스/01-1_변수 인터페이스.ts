/* 변수 인터페이스 */

interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

//변수 todo의 타입으로 Todo 인터페이스를 적용했다.
let todo: Todo;

// 변수 todo는 Todo 인터페이스를 준수하여야 한다.
todo = { id: 1, content: "typescript", completed: true };

/** 함수로 객체를 전달할 떄 */
interface Todo2 {
  id: number;
  content: string;
  completed: boolean;
}

let todos: Todo2[] = [];

function addTodos(todo: Todo2) {
  todos = [...todos, todo];
}

const newTodo: Todo2 = { id: 2, content: "typescript", completed: true };

addTodos(newTodo);
console.log(todos); // [ { id: 2, content: "typescript", completed: true }]
