import React from "react";
import Button from "./components/Button";
import Result from "./components/Result";
import "./App.css";
import Functions from "./components/Functions";
import MathOperations from "./components/MathOperations";

const App = () => {
  const clickHandler = text => {
    console.log('clickHandler', text);
  };

  return (
    <main className="react-calculator">
      Calc App
      <Result value={10} />
      <div className="numbers">
        <Button text="1" clickHandler={clickHandler} />
        <Button text="2" clickHandler={clickHandler} />
        <Button text="3" clickHandler={clickHandler} />
        <Button text="4" clickHandler={clickHandler} />
        <Button text="5" clickHandler={clickHandler} />
        <Button text="6" clickHandler={clickHandler} />
        <Button text="7" clickHandler={clickHandler} />
        <Button text="8" clickHandler={clickHandler} />
        <Button text="9" clickHandler={clickHandler} />
        <Button text="0" clickHandler={clickHandler} />
      </div>
      <Functions onContentClear={() => console.log('Clear')} onDelete={() => console.log('R')}/>
      <MathOperations onClickOperation={operation => console.log(operation)} onClickEqual={equal => console.log(equal)} />
    </main>)
};

export default App;
