import { AUIApp, hooks } from "./src/index";
let aui = new AUIApp();

function App() {
  const [count,setCount]=hooks.useState<number>(0);
  return (<>
    <ui-text x="0" y="0" height="50px" width="200px" 
      background-color="#ffffff" background-opacity="100%" 
      onClick={()=>setCount(count+1)}
      text-content={"点击次数："+count.toString()+"次"}></ui-text>
  </>)
}
aui.mount(<App />, ui);
