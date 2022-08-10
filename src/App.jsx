import React, {useState} from "react";
import "./App.css";
import Functions from "./components/Functions";
import MathOperations from "./components/MathOperations";
import Numbers from "./components/Numbers";
import Result from "./components/Result";

const REGEX = /[^-^+^*^/]+/g;

const App = () => {
  const [stack, setStack] = useState('');

  const clickHandler = number => {
    setStack(`${stack}${number}`)
  };

  const onContentClear = () => {
    setStack('');   
  }

  const onDelete = () => {
    if (stack === '') return;
    const newString = stack.substring(0, stack.length - 1);
    setStack(newString);
  }

  const onEqual = () => {
    // eslint-disable-next-line no-eval
    const result = eval(stack);
    setStack(result.toString());
  }

  console.log('Renderizacion de App');
  return (
    <main className="react-calculator">
      Calc App
      <Result value={stack} />
      <Numbers onClickNumber={clickHandler} />
      <Functions 
        onContentClear={onContentClear} 
        onDelete={onDelete}/>
      <MathOperations 
        onClickOperation={clickHandler} 
        onClickEqual={onEqual} />
    </main>)
};

export default App;
