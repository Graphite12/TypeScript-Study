"use strict";
/* 변수 인터페이스 */
//변수 todo의 타입으로 Todo 인터페이스를 적용했다.
let todo;
// 변수 todo는 Todo 인터페이스를 준수하여야 한다.
todo = { id: 1, content: "typescript", completed: true };
let todos = [];
function addTodos(todo) {
    todos = [...todos, todo];
}
const newTodo = { id: 2, content: "typescript", completed: true };
addTodos(newTodo);
console.log(todos); // [ { id: 2, content: "typescript", completed: true }]
//# sourceMappingURL=01-1_%EB%B3%80%EC%88%98%20%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4.js.map