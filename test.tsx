import { AUIApp, hooks } from "./src/index";
let aui = new AUIApp();

function App() {
  const [name,setName]=hooks.useState("you!");
  return (<>
    <ui-text
      x="0px" y="0px" height="50px" width="200px" text-content={"hello world to " + name}
      background-color="#000000"
      text-color="#ffffff"
      background-opacity="100%"
    ></ui-text>
    <ui-input
      x="0px" y="50px" width="200px" height="50px" placeholder="your name"
      onInput={(e)=>setName(e.target.getAttribute("text-content"))}
      text-content={name}
    ></ui-input>
  </>);
}
aui.mount(<App />, ui);
