import { useState, useRef, useReducer } from 'react'

import "./App.css"
import Editor from "./components/Editor.jsx";
import Header from "./components/Header.jsx";
import List from "./components/List.jsx";

const mockData = [
    {
        id: 0,
        isDone: false,
        content : "React 공부하기",
        date : new Date().getTime(),
    },
    {
        id: 1,
        isDone: false,
        content : "운동하기",
        date : new Date().getTime(),
    },
    {
        id: 2,
        isDone: false,
        content : "퇴근하기",
        date : new Date().getTime(),
    },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  // Editor Components > content > onCreate
  const onCreate = (content)  => {
      const newTodo = {
          id : idRef.current++,
          isDone: false,
          content: content,
          date : new Date().getTime()
      }
      // 불변성 유지를 위해 구조분해할당을 함 , 기존 데이터를 유지 newTodo를 뒤에 배치
      setTodos([newTodo, ...todos]);
  }
  const onUpdate = (targetId) => {
      // todos State의 값 중
      // targetId와 일치하는 Id를 갖는 투두 아이템의 isDone 변경

      // 인수 : todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 바꾼 새로운 배열
      setTodos(todos.map((todo) => todo.id === targetId
          ? {...todo, isDone: !todo.isDone}
          : todo))
  }
  const onDelete = (targetId) => {
      // 인수 : todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열
      setTodos(todos.filter((todo) => todo.id !== targetId))
  };

  return (
    <div className={"app"}>
        <Header/>
        {/*왼쪽에 onCrate는 Editor 컴포넌트가 받을 props 이름*/}
        <Editor onCreate={onCreate}/>
        <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
     /* <div className={"App"}>
          <Exam/>
      </div>*/
  )
}

export default App;
