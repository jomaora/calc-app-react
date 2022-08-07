import React from "react";
import "./App.css";
import Functions from "./components/Functions";
import MathOperations from "./components/MathOperations";
import Numbers from "./components/Numbers";
import Result from "./components/Result";

const App = () => {
  const clickHandler = text => {
    console.log('clickHandler', text);
  };

  return (
    <main className="react-calculator">
      Calc App
      <Result value={10} />
      <Numbers onClickNumber={clickHandler} />
      <Functions onContentClear={() => console.log('Clear')} onDelete={() => console.log('R')}/>
      <MathOperations onClickOperation={operation => console.log(operation)} onClickEqual={equal => console.log(equal)} />
    </main>)
};

export default App;
