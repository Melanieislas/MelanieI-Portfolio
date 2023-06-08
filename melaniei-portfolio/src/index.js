import React from 'react';
import ReactDOM from "react-dom/client";
//import { BrowserRouter as Router} from "react-router-dom";
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

/*
ReactDOM.render(
    <Router basename='Melaniei-Portfolio'>
      <App />
    </Router>,
    document.getElementById("root")
  );

*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.render(<App />, document.getElementById('root'));
