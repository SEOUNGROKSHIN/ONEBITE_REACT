import React from 'react';
import "./List.css"
import TodoItem from "./TodoItem";

function List({ todos, onUpdate, onDelete}) {

    const [search, setSearch] = React.useState("");

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

    return (
        <div className={"List"}>
            <h4>Todo List 🌱</h4>
            <input value={search} onChange={onChangeSearch} placeholder={"검색어를 입력해주세요."}/>
            <div className={"todos_wrapper"}>
                {filteredTodos.map((todos) => {
                    return <TodoItem key={todos.id} {...todos} onUpdate={onUpdate} onDelete={onDelete}/>;
                })}
            </div>
        </div>
    );
}

export default List;