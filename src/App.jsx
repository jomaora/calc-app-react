import { number } from "prop-types";
import React, {useState} from "react";
import "./App.css";
import Functions from "./components/Functions";
import MathOperations from "./components/MathOperations";
import Numbers from "./components/Numbers";
import Result from "./components/Result";

const App = () => {
  const [stack, setStack] = useState('');

  const clickHandler = number => {
    console.log('clickHandler', number, stack);
    setStack(stack + number)
  };

  const onContentClear = () => {
    setStack('');   
  }

  console.log('Renderizacion de App');
  return (
    <main className="react-calculator">
      Calc App
      <Result value={stack} />
      <Numbers onClickNumber={clickHandler} />
      <Functions onContentClear={onContentClear} onDelete={() => console.log('R')}/>
      <MathOperations onClickOperation={clickHandler} onClickEqual={equal => console.log(equal)} />
    </main>)
};

export default App;
