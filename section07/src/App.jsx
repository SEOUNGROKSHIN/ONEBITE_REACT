import "./App.css"
import Viewer from "./components/Viewer.jsx";
import Controller from "./components/Controller.jsx";
import {useState} from "react";
function App() {

    // 부모 컴포넌트에서 데이터를 정제해서 자식 컴포넌트로 전달함
    const [count, setCount] = useState(0);

    const onClickButton = (value) => {
        setCount(count + value);
    }

  return (
    <div className={"App"}>
        <h1>Simple Counter</h1>
        <section>
        <Viewer count = {count} />
        </section>

        <section>
        <Controller onClickButton = {onClickButton}/>
        </section>
    </div>
  )
}

export default App
