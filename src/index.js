// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";

// import { Provider } from "react-redux";
// import configureStore from "./store/configureStore";

// import reportWebVitals from "./reportWebVitals";

// const store = configureStore();

// ReactDOM.render(
//   <Provider store={store}>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </Provider>,
//   document.getElementById("root")
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import "babel-polyfill";

import React from "react";
import { render } from "react-dom";
import Root from "./containers/Root";

render(<Root />, document.getElementById("root"));
