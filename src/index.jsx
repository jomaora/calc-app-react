import App from "./App";
/*
// React < 18 syntax

import React from "react";
import ReactDOM from "react-dom";

const container = document.getElementById('root');
ReactDOM.render(<App/>, container); 
*/

// This is React 18
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App/>);
