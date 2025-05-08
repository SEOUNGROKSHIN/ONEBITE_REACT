import { useState } from 'react'
import './App.css'
import Viewer from "./componets/Viewer.jsx";
import Controller from "./componets/Controller.jsx";
import Today from "./componets/Today.jsx";

function App() {
/*    const [input, setInput] = useState({
        habit: "",
        count: 0
    });*/
    const [habit, setHabit] = useState();
    const [count, setCount] = useState(0);

   const onClickButton = (value) => {
       setCount(count + value);
   }

    return (
        <div className={"App"}>
            <h1>---------------------------------</h1>

            <section>
                <Today />
            </section>

            <section>
                <h3>💡오늘의 습관</h3>
                <Viewer habit={habit} setHabit={setHabit}/>
            </section>

            <section>
                <h3>📌 현재 입력: {habit}</h3>
                <h3>반복횟수 : {count}</h3>
            </section>

            <section>
                <Controller onClickButton={onClickButton}/>
            </section>
        </div>
    );
}

export default App;
