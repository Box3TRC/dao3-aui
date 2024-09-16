# dao3-aui

⚛️+📦React+Dao3(Arena) 在岛三中使用类似 React 的框架写 Client 端 UI（基于 Preact）

## 预备环境

- 请确保你已经配置好 VSCode 插件`ArenaPro`并安装好`Node.js`

## 快速上手

### 1. 创建一个 ArenaPro 项目，然后打开终端安装 dao3-aui

```bash
npm install --save dao3-aui
```

### 2. 修改文件名、文件入口点

- 将`client/src/clientApp.ts`改为`client/src/clientApp.tsx`
- 将`dao3.config.json`中的`client->entry`改为`src/clientApp.tsx`（类似下面这样）

```json
{
    "client": {
        "base": "./client",
        "entry": "src/clientApp.tsx",
        ...省略...
    }
}
```

### 3. 修改`client/tsconfig.json`
需要在`compilerOptions`中加入一些jsx/tsx相关的配置
```jsonc
{
    "compilerOptions": {
        // ...省略...
        "noImplicitAny": false,// 这四行是要添加的内容
        "jsx": "react",
        "jsxFactory": "AUIApp.h",
        "jsxFragmentFactory": "AUIApp.frag"
        // ...省略...
    }
}
```

### 4. 编写代码
那我们先来一个`Counter`示例吧！点击一个按钮，数字会随之增加。
- 文件`client/src/clientApp.tsx`
```tsx
import { AUIApp, hooks } from "dao3-aui";
// 创建一个AUIApp实例
let aui = new AUIApp();

// 这个就是入口点的组件，渲染从这里开始
function App() {
  const [count,setCount]=hooks.useState<number>(0);
  return (<>
    <ui-text x="0" y="0" height="50px" width="200px" 
      background-color="#ffffff" background-opacity="100%" 
      onClick={()=>setCount(count+1)}
      text-content={"点击次数："+count.toString()+"次"}></ui-text>
  </>)
}
// 挂载到屏幕上
aui.mount(<App />, ui);
```
`Alt+Q`使用ArenaPro构建上传代码到岛三。

### 5. 运行
如果你的 **岛三编辑器(Arena)** 中`clientIndex.js`还没有配置好运行apbundle的代码，请在`clientIndex.js`中贴入以下代码：
```javascript
import "./_client_bundle.js"
```
点击运行按钮。你会发现左上角有一个按钮：

![1726421489338](https://ghproxy.cc/https://raw.githubusercontent.com/Box3TRC/dao3-aui/master/README/1726421489338.png)

点击它，数字会变化：

![1726421512496](https://ghproxy.cc/https://raw.githubusercontent.com/Box3TRC/dao3-aui/master/README/1726421512496.png)

快速上手就到这里。

## Ui组件如何使用
### 目前已经兼容的组件有：
- `<ui-text></ui-text>` UiText
- `<ui-image></ui-image>` UiImage
- `<ui-box></ui-box>` UiBox
- `<ui-input></ui-input>` UiInput `是的，真的支持`

### Ui组件属性
- 标签的属性是把 **驼峰式的属性名** 改为 **横线分隔的属性名** ，例如：`backgroundColor` -> `background-color`等等。
```tsx
// textContent要改为text-content
<ui-text text-content="hello world"></ui-text>
```
- 特殊的属性转换
    - `color`类别的属性，接受**css颜色**，例如`#ffffff`(16进制)或者`rgb(255,255,255)`(rgb)的参数
    - `opacity`类别的接受**百分比**，形如`100%`的参数
    - `anchor`接受**两个百分比**，形如`100%,100%`的参数，表示锚点位置
    - `x,y,width,height`接受**offset(px)+scale(%)**，形如`100px`,`10px+20%`,`100%`等的参数
    - ...(以后继续完善这里)
- 事件绑定
    目前实现的事件有：
    - `onClick` 适用于所有ui元素
    - `onInput` 仅适用于`ui-input`

## 示例
### 1. Counter(点击+1计数器)
```tsx
import { AUIApp, hooks } from "dao3-aui";
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
```
### 2. Input(输入框 双向数据绑定)
```tsx
import { AUIApp, hooks } from "dao3-aui";
let aui = new AUIApp();

function App() {
  const [name,setName]=hooks.useState("you");
  return (<>
    <ui-text
      x="0px" y="0px" height="50px" width="200px" text-content={"say hello to " + name}
      background-color="#ffffff"
      background-opacity="100%"
    ></ui-text>
    <ui-input
      x="0px" y="50px" width="200px" height="50px" placeholder="your name here"
      onInput={(e)=>setName(e.target.getAttribute("text-content"))}
      text-content={name}
    ></ui-input>
  </>);
}
aui.mount(<App />, ui);
```