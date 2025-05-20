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

function reducer(state, action) {
   switch (action.type) {
       case "CREATE": return [action.data, ...state]
       case "UPDATE": return state.map((item) =>
           item.id === action.targetId
               ? {...item, isDone: !item.isDone}
               : item)
       case "DELETE": return state.filter((item) =>
           item.id !== action.targetId);
       default:
           return state;
   }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // Editor Components > content > onCreate

    // useReducer 적용해서 리팩토링함
    const onCreate = (content) => {
        dispatch({
            type: "CREATE",
            data: {
              id : idRef.current++,
              isDone: false,
              content: content,
              date : new Date().getTime(),
            }
        })
    };
    const onUpdate = (targetId) => {
        dispatch({
            type: "UPDATE",
            targetId: targetId
        })
    }
    const onDelete = (targetId) => {
        dispatch({
            type: "DELETE",
            targetId: targetId
        })
    }

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
