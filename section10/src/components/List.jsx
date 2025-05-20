import React, {useState, useMemo, useEffect} from 'react';
import "./List.css"
import TodoItem from "./TodoItem";

function List({ todos, onUpdate, onDelete}) {

    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const getFilteredData = () => {
        if(search === "") {
            // 전체 목록을 반환
            return todos;
        }
        return todos.filter((todo) =>
            todo.content.toLowerCase()
                .includes(search.toLowerCase()))
    };

    // 검색값을 저장한 함수를 변수화
   const filteredTodos = getFilteredData();

//Memorization 실습 (length 길이가 달라질 때마다 연산의 중간 결과를 저장하여 리랜더링을 방지함)
    /* 1. 인수로 전달한 콜백 함수로 전달한 결과 값을 반환함
    *  2. 첫번째 인수로 전달한 콜백함수를 두번째 전달할 deps를 기준으로 */
  const {totalCount, doneCount, notDoneCount } =
    useMemo(() => {
        const totalCount = todos.length;
        // isDone 인 속성의 길이를 저장
        const doneCount = todos.filter((todo => todo.isDone).length);
        const notDoneCount = totalCount - doneCount;

        return {
            totalCount,
            doneCount,
            notDoneCount
        }
    }, [todos])
    // useEffect(() => {}, []);
    // 의존성 배열: deps

    // const {totalCount, doneCount, notDoneCount} = getAnalyzedData();

    return (
        <div className={"List"}>
            <h4>Todo List 🌱</h4>
        <div>total: {totalCount}</div>
        <div>done: {doneCount}</div>
        <div>notDone: {notDoneCount}</div>
            <input value={search}
                   onChange={onChangeSearch}
                   placeholder={"검색어를 입력해주세요."}/>
            <div className={"todos_wrapper"}>
                {filteredTodos.map((todo) => {
                    return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete}/>;
                })}
            </div>
        </div>
    );
}

export default List;