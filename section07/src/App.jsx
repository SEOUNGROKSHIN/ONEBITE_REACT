import "./App.css"
import Viewer from "./components/Viewer.jsx";
import Controller from "./components/Controller.jsx";
import {useState, useEffect, useRef} from "react";
import Even from "./components/Even.jsx";
function App() {

    // 부모 컴포넌트에서 데이터를 정제해서 자식 컴포넌트로 전달함
    const [count, setCount] = useState(0);
    const [input, setInput] = useState("");

    const isMount = useRef(false);

    // 1. 마운트 : 탄생
    useEffect(() => {
        console.log("mount")
    },[]);

    // 2. 업데이트 : 변화, 리렌더링
    useEffect(() => {
        // Reference 객체를 생성해서 Flag 변수로 활용
        if (!isMount.current) {
           isMount.current = true;
           return;
        }
        console.log("update");
    });
    // 3. 언마운트 : 죽음

    useEffect(() => {
        console.log(`count: ${count} / input: ${input}`);
    }, [count, input]);

    // 의존성 배열
    // Deps (Dependency Array)
    const onClickButton = (value) => {
        setCount(count + value);
    }

  return (
    <div className={"App"}>
        <h1>Simple Counter</h1>
        <section>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
        </section>
        <section>
        <Viewer count = {count} />
            {count % 2 === 0 ? <Even/> : null};
        </section>

        <section>
        <Controller onClickButton = {onClickButton}/>
        </section>
    </div>
  )
}

export default App
